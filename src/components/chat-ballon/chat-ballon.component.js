import React from 'react';
import { Avatar } from 'antd';

import { ChatBallonContainer, NotOwnerContainerChat, AvatarProfileContainer, 
         ChatContainerText, TimeChat, ChatBallonOwnerContainer, OwnerContainerChat,
         ChatListEndWrapper, ChatListStartWrapper, ChatContainer } from './chat-ballon.styles';

const ChatBallon = ({ chatlist, ...props }) => {
    return (
        <ChatContainer>
            {
                chatlist.map((item, index) => {
                    if (item.ownerAccountChat ) {
                        return (
                            <ChatBallonOwnerContainer key={index}>
                                <ChatContainerText>
                                    {
                                        item.chatList.map((itemList) => {
                                            return (
                                                <ChatListEndWrapper>
                                                    {
                                                         itemList.list.map((chatListText) => {
                                                            return (
                                                                <OwnerContainerChat>
                                                                    {chatListText}
                                                                </OwnerContainerChat>
                                                            )
                                                        })
                                                    }
                                                    <TimeChat>{itemList.date}</TimeChat>
                                                </ChatListEndWrapper>
                                            )
                                        })
                                    }
                                </ChatContainerText>
                            </ChatBallonOwnerContainer>
                        )
                    }
                    else {
                        return (
                            <ChatBallonContainer key={index}>
                                <AvatarProfileContainer>
                                    <Avatar size={40} src={item.picUrl} />
                                </AvatarProfileContainer>
                                <ChatContainerText>
                                    {
                                        item.chatList.map((itemList) => {
                                            return (
                                                <ChatListStartWrapper>
                                                    {
                                                         itemList.list.map((chatListText) => {
                                                            console.log(chatListText)
                                                            return (
                                                                <NotOwnerContainerChat>
                                                                    {chatListText}
                                                                </NotOwnerContainerChat>
                                                            )
                                                        })
                                                    }
                                                    <TimeChat>{itemList.date}</TimeChat>
                                                </ChatListStartWrapper>
                                            )
                                        })
                                    }
                                </ChatContainerText>
                            </ChatBallonContainer>
                       
                        )
                    }
                })
            }
        </ChatContainer>
    )
};

export default ChatBallon;