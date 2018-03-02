import React from 'react';
import MessageList from './MessageList';
import ChannelPreview from './ChannelPreview';
import NotFound from './NotFound';

import {
    gql,
    graphql,
} from 'react-apollo';

const ChannelDetails = ({ data: { loading, error, channel }, match }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if(channel === null) {
    return <NotFound />
  }

  // let messages = [{id:'1', text:"Stub Message - To Replace"}];
  // let name = "Stub Name";
  // let channel = {name, messages};

  return (
    <div>
      <div className="channelName">
        {channel.name}
      </div>
      <MessageList messages={channel.messages}/>
    </div>);
}

export const channelDetailsQuery = gql`
  query ChannelDetailsQuery($channelId : ID!) {
    channel(id: $channelId) {
      id
      name
      messages {
        id
        text
      }
    }
  }
`;

const ChannelDetailsWithQuery = graphql(
  channelDetailsQuery,
  { 
    options: (props) => ({
      variables: { channelId: props.match.params.channelId },
    }),
  }
)(ChannelDetails);

export default ChannelDetailsWithQuery;
