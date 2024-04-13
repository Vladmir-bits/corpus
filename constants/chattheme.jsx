const { vh, vw, IconProps } = require('stream-chat-expo');
const { darkTheme } = require('./Theme');

const DEFAULT_STATUS_ICON_SIZE = 16;
const maxWidth = vw(100) - 72;

const Colors = {
  accent_blue: darkTheme.gray[200],
  accent_green: darkTheme.success[500],
  accent_red: darkTheme.error[500],
  bg_gradient_end: darkTheme.gray[700],
  bg_gradient_start: darkTheme.gray[900],
  black: darkTheme.gray[50],
  blue_alice: darkTheme.gray[800],
  border: darkTheme.gray[800],
  grey: darkTheme.gray[500],
  grey_gainsboro: darkTheme.gray[800],
  grey_whisper: darkTheme.gray[800],
  icon_background: darkTheme.gray[500],
  modal_shadow: '#000000',
  overlay: `${darkTheme.gray[700]}88`,
  shadow_icon: `${darkTheme.gray[700]}88`,
  targetedMessageBackground: '#302D22',
  transparent: 'transparent',
  white: darkTheme.gray[1000],
  white_smoke: darkTheme.gray[1000],
  white_snow: darkTheme.gray[900],
};

const MarkdownStyle = {
  autolink: undefined,
  blockQuoteBar: undefined,
  blockQuoteSection: undefined,
  blockQuoteSectionBar: undefined,
  blockQuoteText: undefined,
  br: undefined,
  codeBlock: undefined,
  del: undefined,
  em: undefined,
  heading: undefined,
  heading1: undefined,
  heading2: undefined,
  heading3: undefined,
  heading4: undefined,
  heading5: undefined,
  heading6: undefined,
  hr: undefined,
  image: undefined,
  inlineCode: undefined,
  list: undefined,
  listItem: undefined,
  listItemBullet: undefined,
  listItemNumber: undefined,
  listItemText: undefined,
  listRow: undefined,
  mailTo: undefined,
  mentions: undefined,
  newline: undefined,
  noMargin: undefined,
  paragraph: undefined,
  paragraphCenter: undefined,
  paragraphWithImage: undefined,
  strong: undefined,
  sublist: undefined,
  table: undefined,
  tableHeader: undefined,
  tableHeaderCell: undefined,
  tableRow: undefined,
  tableRowCell: undefined,
  tableRowLast: undefined,
  text: undefined,
  u: undefined,
  view: undefined,
};

const Theme = {
  attachmentPicker: {
    bottomSheetContentContainer: undefined,
    durationText: undefined,
    errorButtonText: undefined,
    errorContainer: undefined,
    errorText: undefined,
    image: undefined,
    imageOverlay: undefined,
    imageOverlaySelectedComponent: {
      check: undefined,
    },
  },
  attachmentSelectionBar: {
    container: undefined,
    icon: undefined,
  },
  avatar: {
    BASE_AVATAR_SIZE: undefined,
    container: undefined,
    image: undefined,
    presenceIndicator: undefined,
    presenceIndicatorContainer: undefined,
  },
  channel: {
    selectChannel: undefined,
  },
  channelListFooterLoadingIndicator: {
    container: undefined,
  },
  channelListHeaderErrorIndicator: {
    container: undefined,
    errorText: undefined,
  },
  channelListLoadingIndicator: {
    container: undefined,
  },
  channelListMessenger: {
    flatList: undefined,
    flatListContent: undefined,
  },
  channelListSkeleton: {
    animationTime: undefined,
    background: undefined,
    container: undefined,
    gradientStart: undefined,
    gradientStop: undefined,
    height:
    const theme = {
        pinnedHeader: {
        container: {},
        label: {},
        },
        reactionList: {
        container: {},
        middleIcon: {},
        radius: 0,
        reactionBubble: {},
        reactionBubbleBackground: {},
        reactionSize: 0,
        strokeSize: 0,
        },
        replies: {
        avatar: {},
        avatarContainerMultiple: {},
        avatarContainerSingle: {},
        container: {},
        leftAvatarsContainer: {},
        leftCurve: {},
        messageRepliesText: {},
        rightAvatarsContainer: {},
        rightCurve: {},
        avatarSize: undefined,
        },
        status: {
        checkAllIcon: {},
        checkIcon: {},
        readByCount: {},
        statusContainer: {},
        timeIcon: {},
        },
        targetedMessageUnderlay: {},
        videoThumbnail: {
        container: {},
        roundedView: {},
        },
        overlay: {
        container: {},
        messageActions: {
        actionContainer: {},
        icon: {},
        title: {},
        },
        padding: 0,
        reactions: {
        avatarContainer: {},
        avatarName: {},
        avatarSize: 0,
        container: {},
        flatListContainer: {},
        radius: 0,
        reactionBubble: {},
        reactionBubbleBackground: {},
        title: {},
        },
        reactionsList: {
        radius: 0,
        reaction: {},
        reactionList: {},
        reactionSize: 0,
        },
        },
        reply: {
        container: {},
        fileAttachmentContainer: {},
        imageAttachment: {},
        markdownStyles: {},
        messageContainer: {},
        textContainer: {},
        },
        screenPadding: 0,
        spinner: {},
        thread: {
        newThread: {
        text: {},
        backgroundGradientStart: undefined,
        backgroundGradientStop: undefined,
        },
        },
        typingIndicator: {
        container: {},
        text: {
        fontSize: 0,
        },
        },
        attachmentPicker: {
        bottomSheetContentContainer: {},
        durationText: {},
        errorButtonText: {},
        errorContainer: {},
        errorText: {},
        image: {},
        imageOverlay: {},
        imageOverlaySelectedComponent: {
        check: {},
        },
        },
        attachmentSelectionBar: {
        container: {},
        icon: {},
        },
        avatar: {
        BASE_AVATAR_SIZE: 32,
        container: {
        backgroundColor: darkTheme.gray[800],
        },
        image: {
        borderRadius: 16,
        height: 32,
        width: 32,
        },
        presenceIndicator: {
        cx: 6,
        cy: 6,
        r: 5,
        strokeWidth: 2,
        },
        presenceIndicatorContainer: {},
        },
        channel: {
        selectChannel: {},
        },
        channelListFooterLoadingIndicator: {
        container: {},
        },
        channelListHeaderErrorIndicator: {
        container: {},
        errorText: {},
        },
        channelListLoadingIndicator: {
        container: {},
        },
        channelListMessenger: {
        flatList: {},
        flatListContent: {},
        },
        channelListSkeleton: {
        animationTime: 1800, // in milliseconds
        background: {},
        container: {},
        gradientStart: {
        stopOpacity: 0,
        },
        gradientStop: {
        stopOpacity: 0.5,
        },
        height: 64,
        },
        channelPreview: {
        checkAllIcon: {
        height: DEFAULT_STATUS_ICON_SIZE,
        width: DEFAULT_STATUS_ICON_SIZE,
        },
        checkIcon: {
        height: DEFAULT_STATUS_ICON_SIZE,
        width:
        const card = {
            authorName: {},
            authorNameContainer: {
            display: "none",
            },
            authorNameFooter: {},
            authorNameFooterContainer: {},
            authorNameMask: {},
            container: {
            backgroundColor: darkTheme.gray[800],
            borderRadius: 8,
            paddingTop: 4,
            width: "100%",
            },
            cover: {},
            footer: {
            description: {
            color: darkTheme.gray[300],
            },
            title: {
            fontWeight: "700",
            fontSize: 14,
            color: darkTheme.gray[100],
            },
            padding: 4,
            },
            noURI: {
            borderLeftWidth: 2,
            paddingLeft: 8,
            },
            };
            
            const container = {
            width: maxWidth,
            };
            
            const content = {
            container: {
            borderRadiusL: 8,
            borderRadiusS: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            borderTopRightRadius: 8,
            borderWidth: 0,
            width: maxWidth,
            padding: 0,
            backgroundColor: "transparent",
            },
            containerInner: {
            borderWidth: 0,
            backgroundColor: "transparent",
            borderTopEndRadius: 4,
            borderTopLeftRadius: 4,
            },
            deletedContainer: {},
            deletedContainerInner: {},
            deletedMetaText: {
            paddingHorizontal: 5,
            },
            deletedText: {
            em: {
            fontSize: 15,
            fontStyle: "italic",
            fontWeight: "400",
            },
            },
            errorContainer: {
            paddingRight: 12,
            paddingTop: 0,
            },
            errorIcon: {
            height: 20,
            width: 20,
            },
            errorIconContainer: {
            bottom: -2,
            position: "absolute",
            right: -12,
            },
            eyeIcon: {
            height: 16,
            width: 16,
            },
            markdown: {
            mentions: {
            color: darkTheme.blue[500],
            },
            },
            messageUser: {
            fontSize: 12,
            fontWeight: "700",
            padding: 0,
            },
            metaContainer: {
            flexDirection: "row",
            marginTop: 4,
            },
            metaText: {
            fontSize: 12,
            },
            replyBorder: {},
            replyContainer: {},
            textContainer: {
            onlyEmojiMarkdown: { text: { fontSize: 50 } },
            width: maxWidth,
            maxWidth: maxWidth,
            paddingLeft: 0,
            paddingBottom: 0,
            borderRadius: 8,
            borderTopEndRadius: 8,
            borderTopLeftRadius: 8,
            margin: 0,
            marginLeft: 0,
            marginTop: -8,
            },
            wrapper: { width: maxWidth },
            };
            
            const file = {
            container: {
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            borderTopRightRadius: 8,
            },
            details: {},
            fileSize: {},
            icon: {},
            title: {},
            };
            
            const fileAttachmentGroup = {
            container: {
            borderRadius: 4,
            },
            };
            
            const gallery = {
            galleryContainer: {
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            borderTopRightRadius: 8,
            },
            galleryItemColumn: {
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            borderTopRightRadius: 8,
            },
            gridHeight:
