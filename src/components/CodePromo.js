import React from "react";

const CodePromo = () => {
  const containerCode = {
    border: "1px solid #ccc",
    padding: "20px",
    width: " 53.5%",
    margin: " 0 0 50px 120px",
    borderRadius: "15px",
    display: "flex",
    alignItems:"center",
    justifyContent:"center"
  };
  const promoFormStyle = {
    width: "80%",
    borderRadius: "16px",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #ccc",
  };

  const inputStyle = {
    width: "70%",
    backgroundColor: "transparent",
    borderRadius: "15px",
    border: "none",
    outline: "none",
  };

  const buttonStyle = {
    borderRadius: "15px",
    width: "30%",
    padding: "15px",
    backgroundColor: "#000",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  };
  const text = {
    fontWeight: '300',
    margin:' 0 10px'
  }

  return (
    <div className="code-container" style={containerCode}>
      <h3  style={text}>Code promo</h3>
      <form className="form-mail" style={promoFormStyle}>
        <input type="text" placeholder="Entre le code" style={inputStyle} />
        <button className="submit" style={buttonStyle}>
          Appliquer
        </button>
      </form>
    </div>
  );
};

export default CodePromo;
