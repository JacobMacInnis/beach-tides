import React from 'react';
import { connect } from 'react-redux';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';
import { AdMobBanner } from 'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BeachTidesState, BTError } from '../types/types';
// IMAGES
const Beach = require('../../assets/images/Beach.jpg');
const BeachTidesLogo = require('../../assets/images/BeachTidesLogo.png');
const BeachTides = require('../../assets/images/BeachTides.png');
// COMPONENTS
import SearchForm from '../components/SearchForm';
import TideDisplay from '../components/TidesDisplay';
import { DismissKeyboard } from '../components/DismissKeyboard';
import KeyboardShift from '../components/KeyboardShift';


const window = Dimensions.get('window');
const imageDimensions = { height: window.height, width: window.width };

interface HomeScreenProps {
  tideData: any;
  loading: boolean;
  error: BTError | null;
}

const mapStateToProps = (state: BeachTidesState): HomeScreenProps => {
  const { tideData, loading, error } = state.search;
  return {
    tideData,
    loading,
    error
  };
};

export class HomeScreen extends React.Component<HomeScreenProps>  {
  static navigationOptions = {
    header: null,
  };

  bannerError() {
    console.log("An error");
    return;
  }
  
  render() {
    const spinValue = new Animated.Value(0)

    // First set up animation 
    Animated.timing(spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
        iterations: -1
      }
    ).start();
    
    // Second interpolate beginning and end values (in this case 0 and 1)
    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    let adUnitID = "ca-app-pub-9496467954516087/3186808768";
    if (Platform.OS === 'android') {
      adUnitID = "ca-app-pub-9496467954516087/1929567412"
    }
    let bannerSize = 'largeBanner'; 
    if (imageDimensions.width > 475) {
      bannerSize = 'fullBanner';
    }
    const { tideData, loading, error } = this.props;
    const loadingComponent = <View style={styles.loadingImageContainer}>
      <Animated.Image
        style={{transform: [{rotate: spin}] }}
        source={BeachTidesLogo} 
      />
    </View>;
    return (
      <KeyboardShift>
        {() => (
        <DismissKeyboard>
      <View style={{flex: 1}} >
        <View > 
          <View>
            <Image style={[imageDimensions, {position: 'absolute'}]} source={Beach} />
          </View>
        </View>
        <View style={styles.scrollView}>
            <View style={styles.imageContainer}>
              { (tideData || loading || error) ? 
              <View style={{ alignContent: 'center' }}>
                <AdMobBanner
                  style={styles.bottomBanner}
                  bannerSize={bannerSize}
                  adUnitID={adUnitID}
                  testDeviceID="EMULATOR"
                  didFailToReceiveAdWithError={this.bannerError}
                />
              </View> :
              <Image style={styles.image} source={BeachTides}  />
              }
            </View>
            <View style={styles.secondContainer}>
              { loading ? loadingComponent : <TideDisplay /> }
            </View>
            <View style={styles.searchContainer}>
              <SearchForm />
            </View>
          </View>
      </View>
      </DismissKeyboard>
        )}
      </KeyboardShift>
    );
  }
  
  
  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
}

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },  
  imageContainer: {
    flex: 3,
    height: hp('25%'),
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: hp('4%'),
  },
  image: {
    flex: 1,
    width: wp('90%'),
    resizeMode: 'contain'
  },
  secondContainer: {
    flex: 10,
    // backgroundColor: 'blue'
  },
  loadingImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingImage: {
    resizeMode: 'contain',
  },
  searchContainer: {
    flex: 7,
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 1
  },
  container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
  contentContainer: {
      paddingTop: 30,
  },
  welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
