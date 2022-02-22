import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { FeedRoute } from './feed.route';
import { ProfileRoute } from './profile.route';

interface HomeScreenProps{
  navigation: any;
}

export const HomeScreen = (props:  HomeScreenProps) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'feed', title: 'Feed', icon: 'home' },
    { key: 'profile', title: 'Profile', icon: 'contacts' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    feed: FeedRoute,
    profile: () => <ProfileRoute navigation={props.navigation}/>,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
