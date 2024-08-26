import React from "react";
import styled from "styled-components";
import { capitalizeWords, formatMoney } from "../utils/string";
import { X } from "lucide-react";

const IncomeTile = ({ tileData, remove, handleClick }) => {
  const { provider, amount } = tileData;
  return (
    <Tile onClick={(e) => handleClick(e, tileData)}>
      <div>{capitalizeWords(provider)}</div>
      <div>${formatMoney(amount)}</div>
      <Remove onClick={(e) => remove(e, tileData.key)}>
        <X size={16} />
      </Remove>
    </Tile>
  );
};

export default IncomeTile;

const Tile = styled.div`
  width: 98%;
  position: relative;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid var(--graphite-400);
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  & > div:last-of-type {
    margin-right: 1rem;
  }

  &:hover {
    cursor: pointer;
    background: var(--graphite-400);

    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
    transform: translateX(5px);

    button {
      display: flex;
    }
  }
`;

const Remove = styled.button`
  background: unset;
  border: unset;
  color: white;

  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;

  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background: var(--purple-300);
  }
`;
