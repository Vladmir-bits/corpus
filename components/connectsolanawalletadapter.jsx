import React from "react";
import styled from "styled-components/native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import SMSLogo from "../assets/images/SMS.png";
import { Typography } from "./Typography";
import { Badge } from "../components";

const ConnectSolanaWalletAdapter = (props) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleOpenWallet = () => {
    // dispatch(openWallet(""));
    navigation.push("WalletModal");
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  return (
    <ConnectButton onPress={() => {}} disabled={true}>
      <LinearGradient
        colors={[`#9945FF`, "#5A95CC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          padding: 16,
          borderRadius: 8,
          marginBottom: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 140,
          minWidth: 140,
          flex: 1,
        }}
      >
        <LogoContainer>
          <SMSLogoImage source={SMSLogo} resizeMode="contain" />
        </LogoContainer>
        <Typography text="SMS" bold={true} textAlign="center" />
        <BadgeContainer>
          <Typography
            text="Coming soon"
            marginBottom="0"
            shade="300"
            size="caption"
            color="purple"
          />
        </BadgeContainer>
      </LinearGradient>
    </ConnectButton>
  );
};

const ConnectButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 140px;
  min-height: 140px;
  max-width: 50%;
`;

const BadgeContainer = styled.View`
  background-color: ${(props) => props.theme.gray[700]}aa;
  position: absolute;
  border-radius: 16px;
  bottom: 10px;
  padding: ${(props) => props.theme.spacing[1]};
  padding-left: ${(props) => props.theme.spacing[2]};
  padding-right: ${(props) => props.theme.spacing[2]};
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.View`
  margin-right: 8px;
`;

const SMSLogoImage = styled.Image`
  width: 36px;
  height: 36px;
`;

export default ConnectSolanaWalletAdapter;
