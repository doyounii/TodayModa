/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * expo
 * 
 * 
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Text,
  FlatList,
  Image,
  Platform,
  StatusBar,
  Dimensions
} from 'react-native';
import Weather from './Weather';
import * as Location from 'expo-location';

const API_KEY = "b86c474546c60f7c146da98180738950";

// shopping api key
const NAVER_API_KEY = "5JU7NeFVoI4HmS9ZzWnX";
const NAVER_API_SECRET = "Fpj6gmUYjD";

const numColumns = 3;

export default class App extends React.Component{
  state= {
    isLoaded: false,
    city: '',
    weatherName: '',
    cityTemp: 0,
    error: null,
    feels: 0,
    data: [],//상품 정보 json 배열을 통째로 가져옴
    SimpleBasic: false,
    Lovely: false,
    Campus: false,
    Office: false,
    Modern: false,
    width: 100,
    //옷 종류 키워드
    Slacks: false,
    Sleeveless: false,
    Linen: false,
    ShortPants: false,
    Cottonpants: false,
    Shirts: false,
    LongSleeve: false,
    ShortSleeve: false,
    Cardigan: false,
    Jacket: false,
    Jeans: false,
    Coat: false,
  }
	
  //위치 정보 확인
  componentDidMount(){
    this.getLocation();
  }

  shopping = (fashion) =>{
    fetch(`https://openapi.naver.com/v1/search/shop.json?query=${fashion}&display=24&start=1&sort=sim`, 
      {
        method: 'GET',
        headers: {
          "X-Naver-Client-Id": `${NAVER_API_KEY}`,
          "X-Naver-Client-Secret": `${NAVER_API_SECRET}`,
        }
      }
    ).then( (response) => response.json())
    .then(json => {
        this.setState({
          data: json.items
        })
    });
  }
  //위치 정보 얻어서 날씨 데이터 받아옴
  getLocation = async() => {
    try{
      const response = await Location.requestPermissionsAsync();
      const { coords} = await Location.getCurrentPositionAsync();
      const lat=coords.latitude;
      const lon=coords.longitude;

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        console.log(json.weather[0].main)
        this.setState({
          cityTemp: json.main.temp,
          weatherName: json.weather[0].main,
          isLoaded: true,
          city: json.name,
          feels: json.main.feels_like
        })
      });
    }catch(E){
      console.log(E);
    }
  }
  _renderItem = ({item}) => { //쇼핑 결과 가져오기
    return (
      <View style={styles.item}>
        <Image source={{uri:item.image, width:this.state.width/3.5, height:this.state.width/3}}/>
      </View>
    );
  }
  pickSimple=()=> {
    this.state.SimpleBasic= true;
    console.log("simple basic")
    this.setState({
      Lovely: false,
      Campus: false,
      Office: false,
      Modern: false,
	  Sleeveless:false, Linen: false, ShortPants: false,Cottonpants: false,
	  Cardigan:false, Jacket:false, Jeans:false, Coat:false,
	  Slacks:false, Shirts:false, LongSleeve:false, ShortSleeve:false,
    });
	{this.state.Sleeveless ? this.shopping('베이직룩+민소매') :(
	 this.state.Linen ? this.shopping('베이직룩+린넨') :(
	 this.state.ShortPants ? this.shopping('베이직룩+숏바지') :(
	 this.state.Cottonpants ? this.shopping('베이직룩+면바지') : (
	 this.state.Cardigan ? this.shopping('베이직룩+가디건') : (
	 this.state.Jacket ? this.shopping('베이직룩+자켓') : (
	 this.state.Jeans ? this.shopping('베이직룩+청바지') : (
	 this.state.Coat ? this.shopping('베이직룩+코트') :(
	 this.state.Slacks ? this.shopping('베이직룩+슬랙스') :(
	 this.state.Shirts ? this.shopping('베이직룩+셔츠'):(
	 this.state.LongSleeve ? this.shopping('베이직룩+롱슬리브') :(
	 this.state.ShortSleeve ? this.shopping('베이직룩+숏슬리브') : this.shopping('베이직룩') )))))))))))}
  }
  pickLov=()=>{
    this.state.Lovely=true;
    console.log("lovely");
    this.setState({
      SimpleBasic:false,
      Campus: false,
      Office: false,
      Modern: false,
	  Sleeveless:false, Linen: false, ShortPants: false,Cottonpants: false,
	  Cardigan:false, Jacket:false, Jeans:false, Coat:false,
	  Slacks:false, Shirts:false, LongSleeve:false, ShortSleeve:false,
    });
	 {this.state.Sleeveless ? this.shopping('러블리룩+민소매') :(
	 this.state.Linen ? this.shopping('러블리룩+린넨') :(
	 this.state.ShortPants ? this.shopping('러블리룩+숏바지') :(
	 this.state.Cottonpants ? this.shopping('러블리룩+면바지') : (
	 this.state.Cardigan ? this.shopping('러블리룩+가디건') : (
	 this.state.Jacket ? this.shopping('러블리룩+자켓') : (
	 this.state.Jeans ? this.shopping('러블리룩+청바지') : (
	 this.state.Coat ? this.shopping('러블리룩+코트') :(
	 this.state.Slacks ? this.shopping('러블리룩+슬랙스') :(
	 this.state.Shirts ? this.shopping('러블리룩+셔츠'):(
	 this.state.LongSleeve ? this.shopping('러블리룩+롱슬리브') :(
	 this.state.ShortSleeve ? this.shopping('러블리룩+숏슬리브') : this.shopping('러블리룩') )))))))))))}
  }
  pickCampus=()=>{
    this.state.Campus=true;
    console.log('campus');
    this.setState({
      SimpleBasic:false,
      Lovely: false,
      Office: false,
      Modern: false,
	  Sleeveless:false, Linen: false, ShortPants: false,Cottonpants: false,
	  Cardigan:false, Jacket:false, Jeans:false, Coat:false,
	  Slacks:false, Shirts:false, LongSleeve:false, ShortSleeve:false,
    });
	 {this.state.Sleeveless ? this.shopping('캠퍼스룩+민소매') :(
	 this.state.Linen ? this.shopping('캠퍼스룩+린넨') :(
	 this.state.ShortPants ? this.shopping('캠퍼스룩+숏바지') :(
	 this.state.Cottonpants ? this.shopping('캠퍼스룩+면바지') : (
	 this.state.Cardigan ? this.shopping('캠퍼스룩+가디건') : (
	 this.state.Jacket ? this.shopping('캠퍼스룩+자켓') : (
	 this.state.Jeans ? this.shopping('캠퍼스룩+청바지') : (
	 this.state.Coat ? this.shopping('캠퍼스룩+코트') :(
	 this.state.Slacks ? this.shopping('캠퍼스룩+슬랙스') :(
	 this.state.Shirts ? this.shopping('캠퍼스룩+셔츠'):(
	 this.state.LongSleeve ? this.shopping('캠퍼스룩+롱슬리브') :(
	 this.state.ShortSleeve ? this.shopping('캠퍼스룩+숏슬리브') : this.shopping('캠퍼스룩') )))))))))))}
  }
  pickOffice=()=>{
    this.state.Office=true;
    console.log('office');
    this.setState({
      SimpleBasic:false,
      Lovely: false,
      Campus: false,
      Modern: false,
	    Sleeveless:false, Linen: false, ShortPants: false,Cottonpants: false,
	  Cardigan:false, Jacket:false, Jeans:false, Coat:false,
	  Slacks:false, Shirts:false, LongSleeve:false, ShortSleeve:false,
    });
	 {this.state.Sleeveless ? this.shopping('세미정장+민소매') :(
	 this.state.Linen ? this.shopping('세미정장+린넨') :(
	 this.state.ShortPants ? this.shopping('세미정장+숏바지') :(
	 this.state.Cottonpants ? this.shopping('세미정장+면바지') : (
	 this.state.Cardigan ? this.shopping('세미정장+가디건') : (
	 this.state.Jacket ? this.shopping('세미정장+자켓') : (
	 this.state.Jeans ? this.shopping('세미정장+청바지') : (
	 this.state.Coat ? this.shopping('세미정장+코트') :(
	 this.state.Slacks ? this.shopping('세미정장+슬랙스') :(
	 this.state.Shirts ? this.shopping('세미정장+셔츠'):(
	 this.state.LongSleeve ? this.shopping('세미정장+롱슬리브') :(
	 this.state.ShortSleeve ? this.shopping('세미정장+숏슬리브') : this.shopping('세미정장') )))))))))))}
  }
  pickModern=()=>{
    this.state.Modern=true;
    console.log('modern')
    this.setState({
      SimpleBasic:false,
      Lovely: false,
      Campus: false,
      Office: false,
	  Sleeveless:false, Linen: false, ShortPants: false,Cottonpants: false,
	  Cardigan:false, Jacket:false, Jeans:false, Coat:false,
	  Slacks:false, Shirts:false, LongSleeve:false, ShortSleeve:false,
    })
	 {this.state.Sleeveless ? this.shopping('모던룩+민소매') :(
	 this.state.Linen ? this.shopping('모던룩+린넨') :(
	 this.state.ShortPants ? this.shopping('모던룩+숏바지') :(
	 this.state.Cottonpants ? this.shopping('모던룩+면바지') : (
	 this.state.Cardigan ? this.shopping('모던룩+가디건') : (
	 this.state.Jacket ? this.shopping('모던룩+자켓') : (
	 this.state.Jeans ? this.shopping('모던룩+청바지') : (
	 this.state.Coat ? this.shopping('모던룩+코트') :(
	 this.state.Slacks ? this.shopping('모던룩+슬랙스') :(
	 this.state.Shirts ? this.shopping('모던룩+셔츠'):(
	 this.state.LongSleeve ? this.shopping('모던룩+롱슬리브') :(
	 this.state.ShortSleeve ? this.shopping('모던룩+숏슬리브') : this.shopping('모던룩') )))))))))))}
  }
  pickSleeveless=()=> {
    this.state.Sleeveless= true;
    console.log("Sleeveless")
    this.setState({
     Linen:false,
     ShortPants: false,
     Cottonpants: false,
    });
	{this.state.SimpleBasic ? this.shopping('베이직룩+민소매') : 
	(this.state.Lovely ? this.shopping('러블리룩+민소매') :(
	 this.state.Campus ? this.shopping('캠퍼스룩+민소매') :(
	 this.state.Office ? this.shopping('오피스룩+민소매') :(
	 this.state.Modern ? this.shopping('모던룩+민소매') : this.shopping('민소매')))))}
  }
  pickLinen=()=> {
    this.state.Linen= true;
    console.log("Linen")
    this.setState({
      Sleeveless:false,
      ShortPants: false,
      Cottonpants: false,
    });
	{this.state.SimpleBasic ? this.shopping('베이직룩+린넨') : 
	(this.state.Lovely ? this.shopping('러블리룩+린넨') :(
	 this.state.Campus ? this.shopping('캠퍼스룩+린넨') :(
	 this.state.Office ? this.shopping('오피스룩+린넨') :(
	 this.state.Modern ? this.shopping('모던룩+린넨') : this.shopping('린넨')))))}
	
  }
  pickShortPants=()=> {
    this.state.ShortPants= true;
    console.log("Short Pants")
    this.setState({
	  Sleeveless:false,
      Linen: false,
      Cottonpants: false,
    });
	{this.state.SimpleBasic ? this.shopping('베이직룩+숏바지') : 
	(this.state.Lovely ? this.shopping('러블리룩+숏바지') :(
	 this.state.Campus ? this.shopping('캠퍼스룩+숏바지') :(
	 this.state.Office ? this.shopping('오피스룩+숏바지') :(
	 this.state.Modern ? this.shopping('모던룩+숏바지') : this.shopping('숏바지')))))}
  }
  
	pickCottonpants=()=> {
    this.state.Cottonpants= true;
    console.log("Cottonpants")
    this.setState({
      Sleeveless:false,
      Linen: false,
      ShortPants: false,
    });
	{this.state.SimpleBasic ? this.shopping('베이직룩+면바지') : 
	(this.state.Lovely ? this.shopping('러블리룩+면바지') :(
	 this.state.Campus ? this.shopping('캠퍼스룩+면바지') :(
	 this.state.Office ? this.shopping('오피스룩+면바지') :(
	 this.state.Modern ? this.shopping('모던룩+면바지') : this.shopping('면바지')))))}
  }
  pickSlacks=()=> {
    this.state.Slacks= true;
    console.log("slacks")
    this.setState({
     Shirts: false,
	 LongSleeve: false,
	 ShortSleeve: false,	
    });
	{this.state.SimpleBasic ? this.shopping('베이직룩+슬랙스') : 
	(this.state.Lovely ? this.shopping('러블리룩+슬랙스') :(
	 this.state.Campus ? this.shopping('캠퍼스룩+슬랙스') :(
	 this.state.Office ? this.shopping('오피스룩+슬랙스') :(
	 this.state.Modern ? this.shopping('모던룩+슬랙스') : this.shopping('슬랙스')))))}
  }
  
  pickShirts=()=> {
    this.state.Shirts= true;
    console.log("Shrits")
    this.setState({
     Slacks: false,
	 LongSleeve: false,
	 ShortSleeve: false,	
    });
	{this.state.SimpleBasic ? this.shopping('베이직룩+셔츠') : 
	(this.state.Lovely ? this.shopping('러블리룩+셔츠') :(
	 this.state.Campus ? this.shopping('캠퍼스룩+셔츠') :(
	 this.state.Office ? this.shopping('오피스룩+셔츠') :(
	 this.state.Modern ? this.shopping('모던룩+셔츠') : this.shopping('셔츠')))))}
  }
  pickLongSleeve=()=> {
    this.state.LongSleeve= true;
    console.log("LongSleeve")
    this.setState({
     Slacks: false,
	 Shirts: false,
	 ShortSleeve: false,
    });
	{this.state.SimpleBasic ? this.shopping('베이직룩+롱슬리브') : 
	(this.state.Lovely ? this.shopping('러블리룩+롱슬리브') :(
	 this.state.Campus ? this.shopping('캠퍼스룩+롱슬리브') :(
	 this.state.Office ? this.shopping('오피스룩+롱슬리브') :(
	 this.state.Modern ? this.shopping('모던룩+롱슬리브') : this.shopping('롱슬리브')))))}
  }
	pickShortSleeve=()=> {
    this.state.ShortSleeve= true;
    console.log("ShortSleeve")
    this.setState({
     Slacks: false,
	 Shirts: false,
	 LongSleeve: false,
    });
	{this.state.SimpleBasic ? this.shopping('베이직룩+숏슬리브') : 
	(this.state.Lovely ? this.shopping('러블리룩+숏슬리브') :(
	 this.state.Campus ? this.shopping('캠퍼스룩+숏슬리브') :(
	 this.state.Office ? this.shopping('오피스룩+숏슬리브') :(
	 this.state.Modern ? this.shopping('모던룩+숏슬리브') : this.shopping('숏슬리브')))))}
  }
  pickCardigan=()=> {
    this.state.Cardigan= true;
    console.log("Cardigan")
    this.setState({
     Jacket: false,
	 Jeans: false,
	 Coat: false,
    });
	{this.state.SimpleBasic ? this.shopping('베이직룩+가디건') : 
	(this.state.Lovely ? this.shopping('러블리룩+가디건') :(
	 this.state.Campus ? this.shopping('캠퍼스룩+가디건') :(
	 this.state.Office ? this.shopping('오피스룩+가디건') :(
	 this.state.Modern ? this.shopping('모던룩+가디건') : this.shopping('가디건')))))};
  }
  pickJacket=()=> {
    this.state.Jacket= true;
    console.log("Jacket")
    this.setState({
     Cardigan: false,
	 Jeans: false,
	 Coat: false,
    });
	{this.state.SimpleBasic ? this.shopping('베이직룩+자켓') : 
	(this.state.Lovely ? this.shopping('러블리룩+자켓') :(
	 this.state.Campus ? this.shopping('캠퍼스룩+자켓') :(
	 this.state.Office ? this.shopping('오피스룩+자켓') :(
	 this.state.Modern ? this.shopping('모던룩+자켓') : this.shopping('자켓')))))}
  }
  pickJeans=()=> {
    this.state.Jeans= true;
    console.log("Jeans")
    this.setState({
     Cardigan: false,
	 Jacket: false,
	 Coat: false,
    });
	{this.state.SimpleBasic ? this.shopping('베이직룩+청바지') : 
	(this.state.Lovely ? this.shopping('러블리룩+청바지') :(
	 this.state.Campus ? this.shopping('캠퍼스룩+청바지') :(
	 this.state.Office ? this.shopping('오피스룩+청바지') :(
	 this.state.Modern ? this.shopping('모던룩+청바지') : this.shopping('청바지')))))}
  }
  pickCoat=()=> {
    this.state.Coat= true;
    console.log("Coat")
    this.setState({
     Cardigan: false,
	 Jacket: false,
	 Jeans: false,
    });
	{this.state.SimpleBasic ? this.shopping('베이직룩+코트') : 
	(this.state.Lovely ? this.shopping('러블리룩+코트') :(
	 this.state.Campus ? this.shopping('캠퍼스룩+코트') :(
	 this.state.Office ? this.shopping('오피스룩+코트') :(
	 this.state.Modern ? this.shopping('모던룩+코트') : this.shopping('코트')))))}
  }
  
  render(){
    const { isLoaded, city, weatherName, cityTemp, error } = this.state;
    const feels=Math.floor((this.state.feels-273.15)*10)/10;
    this.state.width= Dimensions.get('screen').width;
    return (
      <SafeAreaView style={{paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}}>
        <View style={styles.b_header}>
          <Text style={styles.header}>Today's мода</Text>
        </View>
        <View style={styles.weather}>
          {isLoaded ?
          <Weather 
          city={city} weatherName={weatherName} 
          temp={Math.floor((cityTemp-273.15)*10)/10} feels={feels}
          width={this.state.width}
          />
          : error? <Text>{error}</Text>: null}
        </View>
        <View>
          <ScrollView style={styles.keyword} horizontal={true}>
            {/* 스타일 키워드 영역 */}
            {this.state.SimpleBasic?
            <Text style={styles.selected} onPress={()=>console.log('onpressed')}>SimpleBasic</Text>
            :<Text onPress={this.pickSimple} style={styles.button} >SimpleBasic</Text>}
            {this.state.Lovely?
            <Text style={styles.selected} onPress={()=>console.log('onpressed')} >Lovely</Text>
            :<Text onPress={this.pickLov} style={styles.button}>Lovely</Text>}
            {this.state.Campus?
            <Text style={styles.selected} onPress={()=>console.log('onpressed')}>Campus</Text>
            :<Text onPress={this.pickCampus} style={styles.button}>Campus</Text>}
            {this.state.Office?
            <Text style={styles.selected} onPress={()=>console.log('onpressed')}>Office</Text>
            :<Text onPress={this.pickOffice} style={styles.button}>Office</Text>}
            {this.state.Modern?
            <Text style={styles.selected} onPress={()=>console.log('onpressed')}>Modern</Text>
            :<Text onPress={this.pickModern} style={styles.button}>Modern</Text>}
          </ScrollView>
        </View>
        
        <View>
          <ScrollView style={styles.keyword} horizontal={true}>
            {feels>30?
            ([this.state.Sleeveless?
              <Text style={styles.selected} onPress={()=>console.log('onpressed')}>Sleeveless</Text>
              :<Text onPress={this.pickSleeveless} style={styles.button}>Sleeveless</Text>,
			 this.state.Linen?
              <Text style={styles.selected} onPress={()=>console.log('onpressed')}>Linen</Text>
			  :<Text onPress={this.pickLinen} style={styles.button}>Linen</Text>,
			 this.state.ShortPants?
              <Text style={styles.selected} onPress={()=>console.log('onpressed')}>Short Pants</Text>
              :<Text onPress={this.pickShortPants} style={styles.button}>Short Pants</Text>,
			 this.state.Cottonpants?
              <Text style={styles.selected} onPress={()=>console.log('onpressed')}>Cotton pants</Text>
              :<Text onPress={this.pickCottonpants} style={styles.button}>Cotton pants</Text>
            ])
            :feels>20?
            [(this.state.Slacks?
              <Text style={styles.selected} onPress={()=>console.log('onpressed')}>Slacks</Text>
              :<Text onPress={this.pickSlacks} style={styles.button}>Slacks</Text>),
			 this.state.Shirts?
              <Text style={styles.selected} onPress={()=>console.log('onpressed')}>Shirts</Text>
			        :<Text onPress={this.pickShirts} style={styles.button}>Shirts</Text>,
			 this.state.LongSleeve?
              <Text style={styles.selected} onPress={()=>console.log('onpressed')}>Long Sleeve</Text>
              :<Text onPress={this.pickLongSleeve} style={styles.button}>Long Sleeve</Text>,
			 this.state.ShortSleeve?
              <Text style={styles.selected} onPress={()=>console.log('onpressed')}>Short Sleeve</Text>
              :<Text onPress={this.pickShortSleeve} style={styles.button}>Short Sleeve</Text>
            ]:
            ([(this.state.Cardigan?
              <Text style={styles.selected} onPress={()=>console.log('onpressed')}>Cardigan</Text>
              :<Text onPress={this.pickCardigan} style={styles.button}>Cardigan</Text>),
			 this.state.Jacket?
              <Text style={styles.selected} onPress={()=>console.log('onpressed')}>Jacket</Text>
			        :<Text onPress={this.pickJacket} style={styles.button}>Jacket</Text>,
			 this.state.Jeans?
              <Text style={styles.selected} onPress={()=>console.log('onpressed')}>Jeans</Text>
              :<Text onPress={this.pickJeans} style={styles.button}>Jeans</Text>,
			 this.state.Coat?
              <Text style={styles.selected} onPress={()=>console.log('onpressed')}>Coat</Text>
              :<Text onPress={this.pickCoat} style={styles.button}>Coat</Text>
            ])}
          </ScrollView>
        </View>
        <View style={styles.shopping}>
          {/* 패션 이미지 영역 */}
          <FlatList
           data = {this.state.data}
           style={styles.container}
           renderItem={this._renderItem}
           numColumns={numColumns}
           keyExtractor={item=> item.productId}
            />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  b_header: {
    backgroundColor: '#FAFAFA',
    height: 55
  },
  header: {
    color: '#000000',
    fontSize: 25,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 9,
    fontWeight: 'bold',
  },
  weather: {
    
  },
  keyword: {
    backgroundColor: '#FAFAFA',
    padding: 5,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  shopping: {
    backgroundColor: '#DDDDDD',
    padding: 5,
    margin: 5,
    paddingBottom: 50, //마지막 항목 정상적으로 출력하기위해서
    height: Dimensions.get('window').height/2,
    alignItems: 'center',
    justifyContent: 'center',
    //flex: 1,
  },
  container: {
    // margin:5,
  },
  item: {
    backgroundColor: '#DDDDDD',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color:'black'
  },
  button: {
    color: 'black',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    padding: 8,
    margin: 5,
    textAlign:'center',
  },
  selected: {
    color: 'black',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    padding: 8,
    margin: 5,
    fontWeight: 'bold',
    textAlign:'center',
  }
})