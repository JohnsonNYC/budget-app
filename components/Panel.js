import React, { useEffect, useState } from "react";
import styled from "styled-components";

import IncomeTile from "./IncomeTile";
import UpdateBudgetForm from "./UpdateBudgetForm";
import Modal from "./Modal";

import { Plus } from "lucide-react";
import { formatMoney } from "../utils/string";

const Panel = ({
  leftOverBalance,
  totalIncome,
  totalIncomeList,
  setTotalIncomeList,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefillData, setPrefillData] = useState(null);

  const addIncome = (name, amount) => {
    let copyIncomeList = [...totalIncomeList];
    copyIncomeList.push({
      key: copyIncomeList.length + 1,
      provider: name,
      amount: parseInt(amount),
    });

    setTotalIncomeList(copyIncomeList);
  };

  const removeIncome = (e, key) => {
    e.stopPropagation();
    let copyIncomeList = [...totalIncomeList];
    copyIncomeList = copyIncomeList.filter((incomeEl) => incomeEl.key !== key);

    setTotalIncomeList(copyIncomeList);
  };

  const editData = (key, updatedTileData) => {
    let copyIncomeList = [...totalIncomeList];
    copyIncomeList.splice(key, 1, updatedTileData);
    setTotalIncomeList(copyIncomeList);
  };

  const toggleModal = () => {
    const newVal = !isModalOpen;
    setIsModalOpen(!isModalOpen);

    if (!newVal) {
      setPrefillData(null);
    }
  };

  const openEditModal = (e, incomeEl) => {
    e.stopPropagation();
    setPrefillData(incomeEl);
  };

  useEffect(() => {
    if (prefillData) {
      setIsModalOpen(true);
    }
  }, [prefillData]);

  return (
    <PanelContainer>
      <h2>Budgeting</h2>
      <h2>Progress</h2>

      <TotalDescription>
        <h3>Left Over Balance</h3>
        <h3
          style={{
            color: `var(${leftOverBalance > 0 ? "--green-500" : "--red-400"})`,
          }}
        >
          ${formatMoney(leftOverBalance)}
        </h3>
      </TotalDescription>

      <TotalDescription>
        <h4>Total Income</h4>
        <h4 style={{ color: "var(--purple-300)" }}>
          ${formatMoney(totalIncome)}
        </h4>
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
              handleClick={openEditModal}
            />
          ))}
        </IncomeContainer>
      ) : null}

      <Modal open={isModalOpen} onClose={toggleModal}>
        <UpdateBudgetForm
          type="income"
          addIncome={addIncome}
          prefillData={prefillData}
          editData={editData}
        />
      </Modal>

      <Footer>Made By JohnsonNYC</Footer>
    </PanelContainer>
  );
};

export default Panel;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  padding: 1rem;
`;
const PanelContainer = styled.div`
  width: 25%;
  height: 100%;
  background: var(--purple-600);
  padding: 1rem;
  position: fixed;
  left: 0;
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

  h3:last-of-type {
    color: red;
  }
`;
const IncomeContainer = styled.div`
  max-height: 58vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: white;
  }

  /* Add a thumb */
  &::-webkit-scrollbar-thumb {
    background: var(--graphite-400);
  }
`;
