import styled from 'styled-components';
import { colorsPalette } from '../custom-color/custom-color';

export const ChatContainer = styled.div`
    overflow-Y : auto;
    overflow-X: hidden;
    height: 600px;
`

export const ChatBallonContainer = styled.div`
    display: grid;
    grid-template-columns: 50px auto;
    align-items: flex-start;
    justify: flex-start;
    margin-bottom: 20px;
`;

export const ChatBallonOwnerContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-end;
    margin-bottom: 20px;
    padding-right: 20px;
`;

export const ChatListEndWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 10px;
`;

export const ChatListStartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
`;

export const OwnerContainerChat = styled.div`
    margin-left: 15px;
    background-color: ${colorsPalette.primary};
    color: ${colorsPalette.primaryText};
    padding: 10px 25px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-bottom: 10px;
    width: fit-content;
    line-height: 2;
`;

export const ChatContainerText = styled.div`
    width: calc(100% - 50px);
`;

export const NotOwnerContainerChat = styled.div`
    margin-left: 15px;
    background-color: #f0f0f6;
    padding: 10px 25px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-bottom: 10px;
    width: fit-content;
    line-height: 2;
`;

export const AvatarProfileContainer = styled.div`
    width: 40px;
`;

export const TimeChat = styled.p`
    margin: 0 0 0 25px;
    font-size: 11px;
    color: #949292 !important;
`;