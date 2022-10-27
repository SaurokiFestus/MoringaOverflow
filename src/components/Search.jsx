import React, { useState, useEffect } from "react";

function Search() {
  const [receipt_no, setReceiptNumber] = useState("");
  const [singleReceipt, setSingleReceipt] = useState({
    receipt_no: "",
    sender_name: "",
    receiver_name: "",
    nature_of_goods: "",
    pickup: "",
    destination: "",
    amount_paid: 0,
  });
  const [{ data: receipt, error, status }, setReceipt] = useState({
    data: {},
    error: "",
    status: "pending",
  });
  console.log(singleReceipt.receipt_no);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/receipts").then((response) => {
      if (response.ok) {
        response.json().then((receipts) => {
          console.log(receipts);
          receipts.forEach((receipt) => {
            if (receipt.receipt_no === receipt_no) {
              // console.log(receipt);
              setSingleReceipt({
                receipt_no: receipt.receipt_no,
                sender_name: receipt.sender_name,
                receiver_name: receipt.receiver_name,
                nature_of_goods: receipt.nature_of_goods,
                pickup: receipt.pickup,
                destination: receipt.destination,
                amount_paid: receipt.amount_paid,
              });
            }
          });
          // setReceipts([...receipts, receipt])
          setReceipt({ data: receipt, error: "", status: "resolved" });
        });
      } else {
        response.json().then((err) =>
          setReceipt({
            data: "not found",
            error: err.error,
            status: "rejected",
          })
        );
      }
    });
  }, [receipt_no]);
  // useEffect( () =>
  // {
  //   receipts.forEach( ( receipt ) =>
  //   {
  //     console.log(receipts);
  //   })
  // }, [])
  return (
    <div className="container-fluid bg">
      <div className="receipt-form">
        <form className="receiptNo-form">
          <h5>Track Your Package Delivery </h5>
          <p>Enter the receipt number that you got from our offices</p>
          <div className="form-group">
            <input
              type="text"
              id="receipt_no"
              autoComplete="off"
              className="form-control"
              placeholder="enter your receipt.no..."
              value={receipt_no}
              onChange={(e) => setReceiptNumber(e.target.value)}
            />
            <i className="fa fa-search searchIcon" aria-hidden="true"></i>
          </div>
          <div className=" container package-receipt">
            <div className="house-details">
              {/* <img src={Image3} className="houseIcon"></img> */}
              <div className="receipt-details">
                <h5>{singleReceipt.receipt_no}</h5>
                <h5>Quick Fleet</h5>
                <p>#KEN23454634</p>
              </div>
            </div>
            <div>
              <button className="receiptBtn">On Process</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
