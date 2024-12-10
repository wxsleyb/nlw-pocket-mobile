import { Image, Text, View } from "react-native";
import { s } from "./styles"

export function Welcome(){
    return <View>
        <Image source={require("@/assets/logo.png")} style={s.logo}></Image>
        <Text style={s.title}>Boas vindas ao Nearby</Text>
        <Text style={s.subtitle}>Tenha cupons para usar em seus
             estabelecimentos favoritos!
        </Text>
        
    </View>
}