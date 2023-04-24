import React, { useContext } from 'react';
import { Card } from '../common/Card';
import './ListOverview.css';
import { TfiBarChart, TfiBarChartAlt } from 'react-icons/tfi';
import Wallet from '../Wallet/WalletsContainer/WalletItem/Wallet';

export default function ListOverview(props) {
  const style_barChartInflow = {
    color: 'green',
    fontSize: '30px',
    marginRight: '20px',
  };
  const style_barChartOutflow = {
    color: 'red',
    fontSize: '30px',
    marginRight: '20px',
  };

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

  const wallet = JSON.parse(localStorage.getItem('listWallets'));

  return (
    <>
      <div className="overview_wallet">{/* {wallet[0].name} */}</div>

      <div className="overview_details">
        <Card>
          <div className="total_flow">
            {inflows.icon}
            <div className="flow">
              <p className="flow_title">{inflows.title}</p>
              <p className="flow_amount">{inflows.amount} RON</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="total_flow">
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
