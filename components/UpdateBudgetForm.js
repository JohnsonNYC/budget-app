import React, { useState } from "react";
import styled from "styled-components";
import SplineComponent from "./SplineComponent";
import Button from "./Button";

const UpdateBudgetForm = ({ type, addIncome, addExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleInput = (e, key) => {
    const { value } = e.target;

    if (key === "name") {
      setName(value);
    } else {
      setAmount(value.replace(/[^0-9.,]/g, ""));
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (type == "income") addIncome(name, amount);
    if (type == "expense") addExpense(name, amount);
    setName("");
    setAmount("");
  };
  const isSubmitDisabled = !name || !amount;

  return (
    <Wrapper>
      <LeftContainer>
        <SplineComponent />
      </LeftContainer>
      <RightContainer>
        <h2>Add {type == "income" ? "Income" : "Expense"}</h2>
        <Input
          value={name}
          onChange={(e) => handleInput(e, "name")}
          placeholder={
            type == "income" ? "ex. 'Engineering Job'" : "ex. 'Rent'"
          }
        />
        <Input
          value={amount}
          onChange={(e) => handleInput(e, "amount")}
          placeholder="$1000"
        />
        <Button handleClick={handleClick} disabled={isSubmitDisabled}>
          Add {type == "income" ? "Income" : "Expense"}
        </Button>
      </RightContainer>
    </Wrapper>
  );
};

export default UpdateBudgetForm;

const Wrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Input = styled.input`
  border: 1px solid var(--graphite-100);
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;

const LeftContainer = styled.div`
  height: 100%;
  width: 55%;
`;
const RightContainer = styled(LeftContainer)`
  width: 45%;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--purple-300);
  }
`;
