import React, { useState } from "react";
import styled from "styled-components";

import IncomeTile from "./IncomeTile";
import UpdateBudgetForm from "./UpdateBudgetForm";
import Modal from "./Modal";

import { Plus } from "lucide-react";
import { formatMoney } from "../utils/string";

const Panel = ({ totalIncome, totalIncomeList, setTotalIncomeList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addIncome = (name, amount) => {
    let copyIncomeList = [...totalIncomeList];
    copyIncomeList.push({
      key: copyIncomeList.length + 1,
      provider: name,
      amount: parseInt(amount),
    });

    setTotalIncomeList(copyIncomeList);
  };

  const removeIncome = (key) => {
    let copyIncomeList = [...totalIncomeList];
    copyIncomeList = copyIncomeList.filter((incomeEl) => incomeEl.key !== key);

    setTotalIncomeList(copyIncomeList);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <PanelContainer>
      <h2>Budgeting</h2>
      <h2>Progress</h2>
      <TotalDescription>
        <h4>Total Income</h4>
        <h4>${formatMoney(totalIncome)}</h4>
      </TotalDescription>

      <AddIncome onClick={toggleModal}>
        <Plus size={16} />
        Add Income
      </AddIncome>

      {totalIncomeList ? (
        <IncomeContainer>
          {totalIncomeList.map((incomeEl) => (
            <IncomeTile
              key={incomeEl.key}
              tileData={incomeEl}
              remove={removeIncome}
            />
          ))}
        </IncomeContainer>
      ) : null}

      <Modal open={isModalOpen} onClose={toggleModal}>
        <UpdateBudgetForm type="income" addIncome={addIncome} />
      </Modal>
    </PanelContainer>
  );
};

export default Panel;

const PanelContainer = styled.div`
  width: 25%;
  height: 100%;
  background: var(--purple-600);
  padding: 1rem;
`;

const AddIncome = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  cursor: pointer;
  position: relative;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      display: block;
      width: 100%;
      height: 2px;
      background-color: white;
      animation: underline 0.3s forwards;
    }
  }

  @keyframes underline {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;
const TotalDescription = styled.div`
  display: flex;
  justify-content: space-between;
`;
const IncomeContainer = styled.div``;
