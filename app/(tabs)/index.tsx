import { COLORS, images, icons, SIZES } from "@/constants";
import React, { useState } from "react";
import { FlatList, Image, ListRenderItemInfo, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { banners } from "@/data";

interface BannerItem {
  id: number;
  discount: string;
  discountName: string;
  bottomTitle: string;
  bottomSubtitle: string;
}


const Home = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);


  /**
  * Render header
  */
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.viewLeft}>
          <Image
            source={images.user1}
            resizeMode='contain'
            style={styles.userIcon}
          />
          <View style={styles.viewNameContainer}>
            <Text style={styles.greeeting}>Good Morning👋</Text>
            <Text style={[styles.title]}>Andrew Ainsley</Text>
          </View>
        </View>
        <View style={styles.viewRight}>
          <TouchableOpacity
            onPress={() => navigation.navigate("notifications")}>
            <Image
              source={icons.notificationBell2}
              resizeMode='contain'
              style={[styles.bellIcon, { tintColor: COLORS.navyBlue }]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("mywishlist")}>
            <Image
              source={icons.heartOutline}
              resizeMode='contain'
              style={[styles.bookmarkIcon, { tintColor: COLORS.navyBlue }]}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  /**
* Render search bar
*/
  const renderSearchBar = () => {

    const handleInputFocus = () => {
      // Redirect to another screen
      navigation.navigate('search');
    };
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("search")}
        style={[styles.searchBarContainer, {
          backgroundColor: '#F8C8DC'
        }]}>
        <TouchableOpacity>
          <Image
            source={icons.search2}
            resizeMode='contain'
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <TextInput
          placeholder='Search'
          placeholderTextColor={COLORS.gray}
          style={styles.searchInput}
          onFocus={handleInputFocus}
        />
        <TouchableOpacity>
          <Image
            source={icons.filter}
            resizeMode='contain'
            style={[styles.filterIcon, {
              tintColor: COLORS.navyBlue
            }]}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  const renderBannerItem = ({ item }: ListRenderItemInfo<BannerItem>) => (
    <View style={[styles.bannerContainer, {
      backgroundColor: '#CCCCFF'
    }]}>
      <View style={styles.bannerTopContainer}>
        <View>
          <Text style={[styles.bannerDicount, {
            color: COLORS.navyBlue,
          }]}>{item.discount} OFF</Text>
          <Text style={[styles.bannerDiscountName, {
            color: COLORS.navyBlue
          }]}>{item.discountName}</Text>
        </View>
        <Text style={[styles.bannerDiscountNum, {
          color: COLORS.navyBlue
        }]}>{item.discount}</Text>
      </View>
      <View style={styles.bannerBottomContainer}>
        <Text style={[styles.bannerBottomTitle, {
          color: COLORS.navyBlue
        }]}>{item.bottomTitle}</Text>
        <Text style={[styles.bannerBottomSubtitle, {
          color: COLORS.navyBlue
        }]}>{item.bottomSubtitle}</Text>
      </View>
    </View>
  );

  const keyExtractor = (item: { id: number | string }) => item.id.toString();

  const handleEndReached = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const renderDot = (index: number) => {
    return (
      <View
        style={[styles.dot, index === currentIndex ? styles.activeDot : null]}
        key={index}
      />
    );
  };

  /**
 * Render banner
 */
  const renderBanner = () => {
    return (
      <View style={[styles.bannerItemContainer, {
        backgroundColor: '#CCCCFF'
      }]}>
        <FlatList
          data={banners}
          renderItem={renderBannerItem}
          keyExtractor={keyExtractor}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.round(
              event.nativeEvent.contentOffset.x / SIZES.width
            );
            setCurrentIndex(newIndex);
          }}
        />
        <View style={styles.dotContainer}>
          {banners.map((_, index) => renderDot(index))}
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={[styles.area]}>
      <View style={[styles.container]}>
        {renderHeader()}
        {renderSearchBar()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderBanner()}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: '#F8ECFF'

  },
  container: {
    flex: 1,
    backgroundColor: '#F8ECFF',
    padding: 16
  },
  headerContainer: {
    flexDirection: "row",
    width: SIZES.width - 32,
    justifyContent: "space-between",
    alignItems: "center"
  },
  userIcon: {
    width: 48,
    height: 48,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: COLORS.navyBlue
  },
  viewLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  greeeting: {
    fontSize: 12,
    fontFamily: "regular",
    color: "gray",
    marginBottom: 4
  },
  title: {
    fontSize: 20,
    fontFamily: "medium",
    color: COLORS.navyBlue
  },
  viewNameContainer: {
    marginLeft: 12
  },
  viewRight: {
    flexDirection: "row",
    alignItems: "center"
  },
  bellIcon: {
    height: 24,
    width: 24,
    marginRight: 8
  },
  bookmarkIcon: {
    height: 24,
    width: 24,
  },
  searchBarContainer: {
    width: SIZES.width - 32,
    backgroundColor: COLORS.navyBlue,
    padding: 16,
    borderRadius: 12,
    height: 52,
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  searchIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.gray
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "regular",
    marginHorizontal: 8,
    color: COLORS.navyBlue
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  bannerContainer: {
    width: SIZES.width - 32,
    height: 154,
    paddingHorizontal: 28,
    paddingTop: 28,
    borderRadius: 32,
    backgroundColor: COLORS.secondary
  },
  bannerTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  bannerDicount: {
    fontSize: 12,
    fontFamily: "medium",
    color: COLORS.black,
    marginBottom: 4
  },
  bannerDiscountName: {
    fontSize: 16,
    fontFamily: "bold",
    color: COLORS.black
  },
  bannerDiscountNum: {
    fontSize: 46,
    fontFamily: "bold",
    color: COLORS.black
  },
  bannerBottomContainer: {
    marginTop: 8
  },
  bannerBottomTitle: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.black
  },
  bannerBottomSubtitle: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.black,
    marginTop: 4
  },
  bannerItemContainer: {
    width: "100%",
    paddingBottom: 10,
    backgroundColor: COLORS.secondary,
    height: 170,
    borderRadius: 32,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#CCCCFF',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: COLORS.white,
  }
})