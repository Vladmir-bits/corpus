import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Linking } from "react-native";
import { format } from "date-fns";
import { useTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/pro-solid-svg-icons/faCheck";
import { faCheckToSlot } from "@fortawesome/pro-solid-svg-icons/faCheckToSlot";
import { faFileLines } from "@fortawesome/pro-regular-svg-icons/faFileLines";
import { faCommentLines } from "@fortawesome/pro-regular-svg-icons/faCommentLines";
import { faMoneySimpleFromBracket } from "@fortawesome/pro-regular-svg-icons/faMoneySimpleFromBracket";
import { faHouse } from "@fortawesome/pro-regular-svg-icons/faHouse";

import { faAngleDoubleRight } from "@fortawesome/pro-solid-svg-icons/faAngleDoubleRight";

import { InstructionToText } from "../utils/cleanData";

const ActivityCard = ({ activity }) => {
  const theme = useTheme();
  const { signature, blockTime, logsParsed } = activity;
  const { errorLog, instructionLogs } = logsParsed;

  const transactionDate = blockTime
    ? format(blockTime * 1000, "LLL d, yyyy - p")
    : "";

  const handleActivityClick = () => {
    Linking.openURL(`https://solscan.io/tx/${signature}`);
  };

  const renderActivityIcon = () => {
    const instruction = instructionLogs[0];

    const isSuccessful = "Ok" in activity.status ? true : false;

    switch (instruction) {
      case InstructionToText.CastVote:
        return (
          <IconContainer isSuccessful={isSuccessful} color={theme.success[400]}>
            <FontAwesomeIcon
              icon={faCheckToSlot}
              size={20}
              color={isSuccessful ? theme.success[400] : theme.error[400]}
            />
          </IconContainer>
        );
      case InstructionToText.FinalizeVote:
        return (
          <IconContainer isSuccessful={isSuccessful} color={theme.success[400]}>
            <FontAwesomeIcon
              icon={faCheckToSlot}
              size={20}
              color={isSuccessful ? theme.success[400] : theme.error[400]}
            />
          </IconContainer>
        );
      case InstructionToText.RelinquishVote:
        return (
          <IconContainer isSuccessful={isSuccessful} color={theme.success[400]}>
            <FontAwesomeIcon
              icon={faCheckToSlot}
              size={20}
              color={isSuccessful ? theme.success[400] : theme.error[400]}
            />
          </IconContainer>
        );
      case InstructionToText.PostMessage:
        return (
          <IconContainer
            isSuccessful={isSuccessful}
            color={theme.secondary[400]}
          >
            <FontAwesomeIcon
              icon={faCommentLines}
              size={20}
              color={isSuccessful ? theme.secondary[400] : theme.error[400]}
            />
          </IconContainer>
        );
      case InstructionToText.CreateProposal:
        return (
          <IconContainer isSuccessful={isSuccessful} color={theme.primary[400]}>
            <FontAwesomeIcon
              icon={faFileLines}
              size={20}
              color={isSuccessful ? theme.primary[400] : theme.error[400]}
            />
          </IconContainer>
        );
      case InstructionToText.DepositGoverningTokens:
        return (
          <IconContainer isSuccessful={isSuccessful} color={theme.aqua[400]}>
            <FontAwesomeIcon
              icon={faMoneySimpleFromBracket}
              size={20
