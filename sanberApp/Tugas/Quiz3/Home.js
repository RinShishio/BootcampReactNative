import React, { useEffect } from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, Image, Button,FlatList,TouchableOpacity ,Platform} from 'react-native'
import { Data }from './data'
export default function Home({route, navigation}) {
    //const { username } = route.params;
    const [totalPrice, setTotalPrice] = useState(0);

    const currencyFormat=(num)=> {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
     };

    const updateHarga =(price)=>{
        console.log("UpdatPrice : " + price);
        const temp = Number(price) + totalPrice;
        console.log(temp)
        setTotalPrice(temp)
        
        //? #Bonus (10 poin) -- HomeScreen.js --
        //? agar harga dapat update misal di tambah lebih dari 1 item atau lebih -->
            
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:"space-between", padding: 16}}>
                <View>
                    <Text>Selamat Datang,</Text>
                    <Text style={{fontSize:18, fontWeight:'bold'}}></Text>
                </View>
                <View>
                    <Text>Total Harga:</Text>
                    <Text style={{fontSize:18, fontWeight:'bold'}}> {currencyFormat(totalPrice)}</Text>
                </View>
            </View>
            <View style={{alignItems:'center',  marginBottom: 20, paddingBottom: 60}}>
            {/* //? #Soal No 2 (15 poin) -- Home.js -- Function Home
            //? Buatlah 1 komponen FlatList dengan input berasal dari data.js   
            //? dan memiliki 2 kolom, sehingga menampilkan 2 item per baris (horizontal) -->

            //? #Soal No 3 (15 poin) -- HomeScreen.js --
             //? Buatlah styling komponen Flatlist, agar dapat tampil dengan baik di device untuk layouting bebas  --> */
             <FlatList   behavior ={Platform.OS == "ios" ? "padding" : "height"}
              data={Data}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item})=>{
                        return(<>
                           
                                <View style={styles.daftar}>         
                                    <View style={styles.Item} >
                                        <Image  style={{ width: 100,
        height: 100,
        borderWidth: 1.5, 
        borderColor: 'white',
        borderRadius: 50,}}
                                        source={item.image}
                                        />
                                        <Text style={styles.Text}>{item.harga}</Text>
                                        <Text style={styles.Text}>{item.title}</Text>
                                        <Text style={styles.Text}>{item.desc}</Text>
                                        <Text style={styles.Text}>{item.type}</Text>

                                    </View>
                                </View>
                            
                        </>
                        )
                        
                        }}  
                   />
             }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,        
        backgroundColor:'white', 
    },  
    content:{
        width: 150,
        height: 220,        
        margin: 5,
        borderWidth:1,
        alignItems:'center',
        borderRadius: 5,
        borderColor:'grey',    
    },
    daftar:{
       
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,borderWidth:2, marginLeft:20,marginRight:20, borderRadius: 15
    },
    Item:{
        margin:2,
        width: 500,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },Text:{
        marginTop: 5,
        textAlign:'center',
    }
})
