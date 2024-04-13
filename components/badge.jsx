const Badge = ({ title, type, size = "default" }) => {
    return (
      <BadgeFlexContainer>
        <BadgeContainer type={type}>
          <BadgeText type={type}>{title || "Title"}</BadgeText>
        </BadgeContainer>
      </BadgeFlexContainer>
    );
  };
  
  const BadgeFlexContainer = styled.View`
    align-items: flex-start;
  `;
  
  const BadgeContainer = styled.View`
    border-radius: 8px;
    padding-top: ${(props) => props.theme.spacing[1]}
    padding-bottom: ${(props) => props.theme.spacing[1]}
    padding-left: ${(props) => props.theme.spacing[2]}
    padding-right: ${(props) => props.theme.spacing[2]}
    align-items: center;
    justify-content: center;
    ${(props) => {
      if (props.type === "success") {
        return `background:  ${props.theme.aqua[800]}44; border: ${props.theme.aqua[400]};`;
      }
      if (props.type === "pending") {
        return `background:  ${props.theme.secondary[800]}44; border: ${props.theme.secondary[400]};`;
      }
      if (props.type === "error") {
        return `background:  ${props.theme.error[800]}44; border: ${props.theme.error[400]};`;
      }
      if (props.type === "gray") {
        return `background:  ${props.theme.gray[800]}44; border: ${props.theme.gray[400]};`;
      }
      if (props.type === "warning") {
        return `background:  ${props.theme.warning[800]}44; border: ${props.theme.warning[400]};`;
      }
    }}
  `;
  
  const BadgeText = styled.Text`
    font-size: 12px;
    ${(props) => {
      if (props.type === "success") {
        return `color:  ${props.theme.aqua[400]};`;
      }
      if (props.type === "pending") {
        return `color:  ${props.theme.secondary[400]};`;
      }
      if (props.type === "error") {
        return `color:  ${props.theme.error[400]};`;
      }
      if (props.type === "gray") {
        return `color:  ${props.theme.gray[400]};`;
      }
      if (props.type === "warning") {
        return `color:  ${props.theme.warning[400]};`;
      }
    }}
  `;
  