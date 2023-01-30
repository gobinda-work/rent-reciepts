import * as React from 'react';
import './style.scss';

const data = [{ date: '1st May 2022', month: 'May', year: 2022 }];
export default function App() {
  return (
    <div>
      <div className="container">
        <div className="titleContainer">
          <div className="headingText">
            <h5 className="no-wrap__3c_r9">
              <strong>RENT RECEIPT </strong>
              <span>May 2022</span>
            </h5>
          </div>
          <div className="headingText">
            <p>Receipt No: 1</p>
            <p>Date: Jun 01 2022</p>
          </div>
        </div>
        <p className="receipt-body__1IXo8" style={{ padding: '24px 5px' }}>
          Received sum of INR <strong>Rs.26500</strong> from{' '}
          <strong>Gobinda Das</strong> towards the rent of property located at{' '}
          <strong>
            #65, Vipra Heights Apartment, 2nd Main Rd, opp. to Adda Restaurant
            Road, Land mark, next to Golden Park Apartments, Muneshwara Layout,
            Kodichikknahalli, Bengaluru, Karnataka 560076
          </strong>{' '}
          for the period from <strong>May 01 2022</strong> to{' '}
          <strong>May 31 2022</strong>
        </p>
        <p style={{ padding: '10px 5px' }}>
          <strong>MRD Pavithra Jois and Mr. Vinod Bhatsoori </strong>
          <span style={{ padding: '12px; color: rgb(153, 153, 153)' }}>
            (Landlord)
          </span>
        </p>
      </div>
    </div>
  );
}
