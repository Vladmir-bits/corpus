const React = require("react");
const styled = require("styled-components/native").default;
const { useTheme } = require("styled-components");
const { format, formatDistance } = require("date-fns");
const { Typography } = require("./Typography");
const { FontAwesomeIcon } = require("@fortawesome/react-native-fontawesome");
const { faCircleCheck } = require("@fortawesome/pro-regular-svg-icons/faCircleCheck");
const { faCircleXmark } = require("@fortawesome/pro-regular-svg-icons/faCircleXmark");

const { WalletIdentity } = require("../components");

const ChatMessage = ({
  message,
  proposal,
  isInProposal = false,
  isYesVote = true,
  voteWeight = "",
}) => {
  const theme = useTheme();
  const { body, postedAt, proposalId, author } = message;

  if (!proposal) {
    return <EmptyView />;
  }

  return (
    <Container>
      <Column>
        <Row>
          <Column>
            <WalletIdentity memberPublicKey={author} />
            <MessageDate>
              {formatDistance(postedAt * 1000, new Date(), { addSuffix: true })}
            </MessageDate>
          </Column>
          {!!voteWeight && (
            <VoteButton>
              {isYesVote ? (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size={16}
                  color={theme.success[400]}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  size={16}
                  color={theme.error[400]}
                />
              )}
              <Typography
                text={voteWeight}
                size="subtitle"
                shade="300"
                bold={true}
                marginBottom="0"
                marginLeft="2"
              />
            </VoteButton>
          )}
        </Row>
        <Typography
          text={body}
          size="subtitle"
          shade={"100"}
          selectable={true}
          hasLinks={true}
        />
      </Column>
    </Container>
  );
};

const Container = styled.View`
  background: ${(props) => props.theme.gray[800]};
  margin-top: ${(props) => props.theme.spacing[3]};
  padding: ${(props) => props.theme.spacing[3]};
  border-radius: 8px;
  flex-direction: row;
  margin-left: ${(props) => props.theme.spacing[3]};
  margin-right: ${(props) => props.theme.spacing[3]};
`;

const MessageDate = styled.Text`
  color: ${(props) => props.theme.gray[400]};
  margin-bottom: ${(props) => props.theme.spacing[3]};
  font-size: 12px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

const Column = styled.View`
  flex: 1;
`;

const EmptyView = styled.View``;

const VoteButton = styled.View`
  background: ${(props) => props.theme.gray[900]};
  padding: ${(props) => props.theme.spacing[2]};
  padding-left: ${(props) => props.theme.spacing[3]};
  padding-right: ${(props) => props.theme.spacing[3]};

  border-radius: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

module.exports = { ChatMessage };
