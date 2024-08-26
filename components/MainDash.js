import React, { useState, useMemo } from "react";
import Panel from "./Panel";
import DataVisualizer from "./DataVisualizer";
import Expenses from "./Expenses";

import styled from "styled-components";

const MainDash = () => {
  const [totalIncomeList, setTotalIncomeList] = useState([
    { key: 1, provider: "work", amount: 1000.5 },
  ]);

  const [totalExpensesList, setTotalExpensesList] = useState([
    {
      key: 1,
      provider: "rent",
      amount: 500,
    },
    {
      key: 2,
      provider: "food",
      amount: 200,
    },
    {
      key: 3,
      provider: "utilities",
      amount: 100,
    },
  ]);

  let TOTAL_INCOME = useMemo(() => {
    return totalIncomeList.reduce((acc, income) => {
      return acc + income.amount;
    }, 0);
  }, [totalIncomeList]);

  let TOTAL_EXPENSES = useMemo(() => {
    return totalExpensesList.reduce((acc, expense) => {
      return acc + expense.amount;
    }, 0);
  }, [totalExpensesList]);

  const LEFT_OVER_BALANCE = TOTAL_INCOME - TOTAL_EXPENSES;

  return (
    <Container>
      <Panel
        leftOverBalance={LEFT_OVER_BALANCE}
        totalIncome={TOTAL_INCOME}
        totalIncomeList={totalIncomeList}
        setTotalIncomeList={setTotalIncomeList}
      />
      <div
        style={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
          marginLeft: "25%",
        }}
      >
        <DataVisualizer
          totalIncomeList={totalIncomeList}
          totalIncome={TOTAL_INCOME}
          totalExpenses={TOTAL_EXPENSES}
        />
        <Expenses
          totalExpense={TOTAL_EXPENSES}
          totalExpensesList={totalExpensesList}
          setTotalExpensesList={setTotalExpensesList}
        />
      </div>
    </Container>
  );
};

export default MainDash;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
