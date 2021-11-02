import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
  FlatList,
  Image
} from 'react-native';

const NAVER_API_KEY = "5JU7NeFVoI4HmS9ZzWnX";
const NAVER_API_SECRET = "Fpj6gmUYjD";

export default class Keyword extends React.Component{
  state={
    feels1: 0,
		Slacks: false,
    Pants: false,
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
    data: [],
    SimpleBasic: false,
    Lovely: false,
    Campus: false,
    Office: false,
    Modern: false,
  };
  shopping = (fashion) =>{
    fetch(`https://openapi.naver.com/v1/search/shop.json?query=${fashion}&display=36&start=1&sort=sim`, 
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
    })
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
    this.shopping('베이직룩');
    this.setState({
      Lovely: false,
      Campus: false,
      Office: false,
      Modern: false,
    });
  }
  pickLov=()=>{
    this.state.Lovely=true;
    console.log("lovely");
    this.shopping('러블리룩');
    this.setState({
      SimpleBasic:false,
      Campus: false,
      Office: false,
      Modern: false,
    });
  }
  pickCampus=()=>{
    this.state.Campus=true;
    console.log('campus');
    this.shopping('캠퍼스룩');
    this.setState({
      SimpleBasic:false,
      Lovely: false,
      Office: false,
      Modern: false,
    });
  }
  pickOffice=()=>{
    this.state.Office=true;
    console.log('office');
    this.shopping('세미정장');
    this.setState({
      SimpleBasic:false,
      Lovely: false,
      Campus: false,
      Modern: false,
    });
  }
  pickModern=()=>{
    this.state.Modern=true;
    console.log('modern')
    this.setState({
      SimpleBasic:false,
      Lovely: false,
      Campus: false,
      Office: false,
    })
    this.shopping('모던룩');
  }
  pickSleeveless=()=> {
    this.state.Sleeveless= true;
    console.log("Sleeveless")
    this.shopping('나시');
    this.setState({
     
    });
}
pickLinen=()=> {
    this.state.Linen= true;
    console.log("Linen")
    this.shopping('린넨');
    this.setState({
     
    });
}
pickShortPants=()=> {
    this.state.ShortPants= true;
    console.log("Short Pants")
    this.shopping('반바지');
    this.setState({
     
    });
}
pickSlacks=()=> {
    this.state.Slacks= true;
    console.log("slacks")
    this.shopping('슬랙스');
    this.setState({
     
    });
}
pickCottonpants=()=> {
    this.state.Cottonpants= true;
    console.log("Cottonpants")
    this.shopping('면바지');
    this.setState({
     
    });
}
pickShrits=()=> {
    this.state.Shirts= true;
    console.log("Shrits")
    this.shopping('셔츠');
    this.setState({
     
    });
}
pickLongSleeve=()=> {
    this.state.LongSleeve= true;
    console.log("LongSleeve")
    this.shopping('롱슬리브');
    this.setState({
     
    });
}
pickCardigan=()=> {
    this.state.Cardigan= true;
    console.log("Cardigan")
    this.shopping('가디건');
    this.setState({
     
    });
}
pickJacket=()=> {
    this.state.Jacket= true;
    console.log("Jacket")
    this.shopping('자켓');
    this.setState({
     
    });
}
pickJeans=()=> {
    this.state.Jeans= true;
    console.log("Jeans")
    this.shopping('청바지');
    this.setState({
     
    });
}
pickCoat=()=> {
    this.state.Coat= true;
    console.log("Coat")
    this.shopping('코트');
    this.setState({
     
    });
}
pickShortSleeve=()=> {
    this.state.ShortSleeve= true;
    console.log("ShortSleeve")
    this.shopping('숏슬리브');
    this.setState({
     
    });
}
  render(){
    return (
      <>
      <View>
          <ScrollView style={styles.keyword} horizontal={true}>
            {/* 스타일 키워드 영역 */}
            {this.state.SimpleBasic?
            <Text style={styles.selected} onPress={()=>console.log('onpressed')}>SimpleBasic</Text>
            :<Text onPress={this.pickSimple} style={styles.button}>SimpleBasic</Text>}
            {this.state.Lovely?
            <Text style={styles.selected} onPress={()=>console.log('onpressed')}>Lovely</Text>
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
            {this.state.feels1>30?
            [<Text onPress={this.pickSleeveless} style={styles.button}>Sleeveless</Text>,
            <Text onPress={this.pickLinen} style={styles.button}>Linen</Text>,
            <Text onPress={this.pickShortPants} style={styles.button}>Short Pants</Text>,
            <Text onPress={this.pickCottonpants} style={styles.button}>Cotton pants</Text>]
            :this.state.feels1<=30 && this.state.feels1>20?
            [
              <Text onPress={this.pickSlacks} style={styles.button}>Slacks</Text>,
              <Text onPress={this.pickShrits} style={styles.button}>Shrits</Text>,
              <Text onPress={this.pickLongSleeve} style={styles.button}>Long Sleeve</Text>,
              <Text onPress={this.pickSlacks} style={styles.button}>Short Sleeve</Text>,
            ]:
            [
              <Text onPress={this.pickCardigan} style={styles.button}>Cardigan</Text>,
                <Text onPress={this.pickSlacks} style={styles.button}>Jacket</Text>,
              <Text onPress={this.pickSlacks} style={styles.button}>Jeans</Text>,
              <Text onPress={this.pickSlacks} style={styles.button}>Coat</Text>,
            ]}
          </ScrollView>
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
        </View>
      </>
    );
  }
};

const styles=StyleSheet.create({
  container: {
    flexDirection: 'row',

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
  shopping: {
    backgroundColor: '#DDDDDD',
    padding: 5,
    margin: 5,
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