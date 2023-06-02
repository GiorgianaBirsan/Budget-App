import React, { useContext } from 'react';
import { Card } from '../common/Card';
import './ListOverview.css';
import { TfiBarChart, TfiBarChartAlt } from 'react-icons/tfi';
import { GiWallet } from 'react-icons/gi';
import WalletContext from '../utils/wallet-context';
import { style_barChartInflow, style_barChartOutflow } from './dinamicStyle';

export default function ListOverview(props) {
  const ctx = useContext(WalletContext);

  const inflows = {
    title: 'Total incomes',
    amount: props.inflow,
    icon: <TfiBarChart style={style_barChartInflow} />,
  };

  const outflows = {
    title: 'Total spendings',
    amount: props.outflow,
    icon: <TfiBarChartAlt style={style_barChartOutflow} />,
  };

  let walletAmount = Number(ctx.amount);

  const walletTransactions = props.wallet.filter(name => name.wallet === ctx.name.toLowerCase());

  walletTransactions.reverse().forEach(element => {
    if (element.amount_type === 'income') {
      walletAmount = walletAmount + Number(element.amount);
    } else {
      if (walletAmount > Number(element.amount)) {
        walletAmount = walletAmount - Number(element.amount);
      } else {
        walletAmount = 0;
      }
    }
  });

  return (
    <>
      <div className="overview_details">
        {ctx && (
          <Card>
            <div className="current_amount">
              <GiWallet style={{ color: ctx.color, fontSize: '30px', marginRight: '20px' }} />
              <div className="flow">
                <p className="flow_title">{ctx.name}</p>
                <p className="total_amount">{walletAmount} RON</p>
              </div>
            </div>
          </Card>
        )}

        <Card>
          <div className="total_inflow">
            {inflows.icon}
            <div className="flow">
              <p className="flow_title">{inflows.title}</p>
              <p className="flow_amount">{inflows.amount} RON</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="total_outflow">
            {outflows.icon}
            <div className="flow">
              <p className="flow_title">{outflows.title}</p>
              <p className="flow_amount">{outflows.amount} RON</p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
