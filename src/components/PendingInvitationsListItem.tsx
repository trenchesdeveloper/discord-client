import { Box, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import Avartar from "./Avartar";

interface IPendingInvitationsListItemProps {
  id: number;
  senderId: {
    username: string;
    email: string;
  };
}

const PendingInvitationsListItem: React.FC<{
  invitation: IPendingInvitationsListItemProps;
  acceptFriendInvitation: (id: number) => void;
  rejectFriendInvitation: (id: number) => void;
}> = ({
  invitation: {
    id,
    senderId: { email, username },
  },
  acceptFriendInvitation,
  rejectFriendInvitation,
}) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptFriendInvitation = () => {
    acceptFriendInvitation(id);
    setButtonsDisabled(true);
  };

  const handleRejectFriendInvitation = () => {
    rejectFriendInvitation(id);
    setButtonsDisabled(true);
  };

  return (
    <Tooltip title={email}>
      <div
        style={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avartar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: "700",
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationsListItem;
