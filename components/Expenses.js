import React, { useState, useEffect } from "react";
import styled from "styled-components";
import IncomeTile from "./IncomeTile";
import Modal from "./Modal";
import UpdateBudgetForm from "./UpdateBudgetForm";

import { formatMoney } from "../utils/string";
import { Plus } from "lucide-react";

const Expenses = ({
  totalExpense,
  totalExpensesList,
  setTotalExpensesList,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefillData, setPrefillData] = useState(null);

  const addExpense = (name, amount) => {
    let copyExpensesList = [...totalExpensesList];
    copyExpensesList.push({
      key: copyExpensesList.length + 1,
      provider: name,
      amount: parseInt(amount),
    });

    setTotalExpensesList(copyExpensesList);
  };

  const removeExpense = (e, key) => {
    e.stopPropagation();
    let copyExpensesList = [...totalExpensesList];
    copyExpensesList = copyExpensesList.filter(
      (expenseEl) => expenseEl.key !== key
    );

    setTotalExpensesList(copyExpensesList);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const editData = (key, updatedTileData) => {
    let copyExpenseList = [...totalExpensesList];
    copyExpenseList.splice(key, 1, updatedTileData);
    setTotalExpensesList(copyExpenseList);
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
    <Wrapper>
      <TotalEl>
        <h2>Total Expenses</h2>
        <span>${formatMoney(totalExpense)}</span>
      </TotalEl>

      <AddExpense onClick={toggleModal}>
        <Plus size={16} />
        Add Expense
      </AddExpense>

      {totalExpensesList ? (
        <IncomeContainer>
          {totalExpensesList.map((expenseEl) => (
            <IncomeTile
              key={expenseEl.key}
              tileData={expenseEl}
              remove={removeExpense}
              handleClick={openEditModal}
            />
          ))}
        </IncomeContainer>
      ) : null}

      <Modal open={isModalOpen} onClose={toggleModal}>
        <UpdateBudgetForm
          type={"expense"}
          addExpense={addExpense}
          editData={editData}
          prefillData={prefillData}
        />
      </Modal>
    </Wrapper>
  );
};

export default Expenses;

const Wrapper = styled.div`
  height: 50%;
  padding: 1rem;
`;

const TotalEl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const AddExpense = styled.div`
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

const IncomeContainer = styled.div`
  width: 100%;
  max-height: 30vh;
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
