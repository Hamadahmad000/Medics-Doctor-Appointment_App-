import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {THEME_COLORS} from '../../constant/Theme';
import styles from './profileStyle';
import DialogueBox from '../../components/dialogueBox/DialogueBox';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const customStyle = {
  alignItems: 'center',
};

export default function Profile() {
  const [isDialogueBoxVisible, setisDialogueBoxVisible] = useState(false);
  const navigation = useNavigation();
  function handleLogoutPopup() {
    setisDialogueBoxVisible(true);
  }
  // Handling  Logout Functionality

  const handleLogout = () => {
    AsyncStorage.clear()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          // minHeight: SCREEN_SIZE.SCREEN_HEIGHT,
          backgroundColor: THEME_COLORS.green,
        }}>
        <View style={[styles.container]}>
          <StatusBar backgroundColor={THEME_COLORS.synergy} />

          <View style={styles.top}>
            <View style={[styles.profile]}>
              <View style={[customStyle]}>
                <Image
                  source={require('../../assets/img/Profile/user.png')}
                  style={styles.userProfileImg}
                  resizeMode="contain"
                />
                <View style={styles.changeProfileIcon}>
                  <Image
                    source={require('../../assets/icons/camera.png')}
                    style={styles.cameraicon}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <Text style={styles.userName}>Ambelia Renata</Text>
            </View>
            <View style={styles.userHealthInfo}>
              <View style={[styles.innerInfo, {}]}>
                <Image
                  style={styles.innerimage}
                  resizeMode="contain"
                  source={require('../../assets/icons/heartRate.png')}
                />

                <Text style={styles.innerRating}>Heart rate</Text>
                <Text style={styles.innerRatingCount}>215bpm</Text>
              </View>
              <View style={styles.verticleDevider}></View>
              <View style={[styles.innerInfo, {}]}>
                <Image
                  style={styles.innerimage}
                  resizeMode="contain"
                  source={require('../../assets/icons/caloriesRate.png')}
                />
                <Text style={styles.innerRating}>Calories</Text>
                <Text style={styles.innerRatingCount}>756cal</Text>
              </View>
              <View style={styles.verticleDevider}></View>
              <View style={[styles.innerInfo, {}]}>
                <Image
                  style={styles.innerimage}
                  resizeMode="contain"
                  source={require('../../assets/icons/weightRate.png')}
                />
                <Text style={styles.innerRating}>Weight</Text>
                <Text style={styles.innerRatingCount}>103ibs</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.bottomInner}>
              <View style={styles.bottomInnerLeft}>
                <View style={styles.bottomLeftIcon}>
                  <Image
                    source={require('../../assets/icons/heart.png')}
                    style={styles.bottomIconImage}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.bottomText}>My Saved</Text>
              </View>
              <Image
                source={require('../../assets/icons/RightArrow.png')}
                resizeMode="contain"
                style={styles.rightArrowIcon}
              />
            </TouchableOpacity>
            <View style={styles.horizontalDevider}></View>
            <TouchableOpacity style={styles.bottomInner}>
              <View style={styles.bottomInnerLeft}>
                <View style={styles.bottomLeftIcon}>
                  <Image
                    source={require('../../assets/icons/note.png')}
                    style={styles.bottomIconImage}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.bottomText}>Appointmnet</Text>
              </View>
              <Image
                source={require('../../assets/icons/RightArrow.png')}
                resizeMode="contain"
                style={styles.rightArrowIcon}
              />
            </TouchableOpacity>
            <View style={styles.horizontalDevider}></View>
            <TouchableOpacity style={styles.bottomInner}>
              <View style={styles.bottomInnerLeft}>
                <View style={styles.bottomLeftIcon}>
                  <Image
                    source={require('../../assets/icons/wallet.png')}
                    style={styles.bottomIconImage}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.bottomText}>Payment Method</Text>
              </View>
              <Image
                source={require('../../assets/icons/RightArrow.png')}
                resizeMode="contain"
                style={styles.rightArrowIcon}
              />
            </TouchableOpacity>
            <View style={styles.horizontalDevider}></View>
            <TouchableOpacity style={styles.bottomInner}>
              <View style={styles.bottomInnerLeft}>
                <View style={styles.bottomLeftIcon}>
                  <Image
                    source={require('../../assets/icons/message_stroke.png')}
                    style={styles.bottomIconImage}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.bottomText}>FAQs</Text>
              </View>
              <Image
                source={require('../../assets/icons/RightArrow.png')}
                resizeMode="contain"
                style={styles.rightArrowIcon}
              />
            </TouchableOpacity>
            <View style={styles.horizontalDevider}></View>
            <TouchableOpacity
              style={styles.bottomInner}
              onPress={handleLogoutPopup}>
              <View style={styles.bottomInnerLeft}>
                <View style={styles.bottomLeftIcon}>
                  <Image
                    source={require('../../assets/icons/exclamation.png')}
                    style={[styles.bottomIconImage, {tintColor: 'red'}]}
                    resizeMode="contain"
                  />
                </View>
                <Text style={[styles.bottomText, {color: 'red'}]}>Logout</Text>
              </View>
              <Image
                source={require('../../assets/icons/RightArrow.png')}
                resizeMode="contain"
                style={[styles.rightArrowIcon]}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.optionButton}>
            <Image
              source={require('../../assets/icons/dots.png')}
              resizeMode="contain"
              style={styles.optionIcon}
            />
          </TouchableOpacity>
          <DialogueBox
            isvisible={isDialogueBoxVisible}
            title={'Are you sure to log out of your account?'}
            buttonText={'Log Out'}
            bottomButton={true}
            onpress={handleLogout}
            bottomButtonText={'Cancel'}
            icon={require('../../assets/icons/logout.png')}
            onBottomButtonPress={() => {
              setisDialogueBoxVisible(false);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
