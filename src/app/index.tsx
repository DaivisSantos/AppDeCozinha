import {View, Text, Alert} from 'react-native';
import styles from '@/app/styles';
import Ingredients from '@/components/Ingredients';
import { useEffect, useState } from 'react';
import { services } from '@/services';
import { router } from 'expo-router';
import { IngredientResponse } from '@/services/services.types';
import { Selected } from '@/components/Selected';
import { Loading } from '@/components/Loading';


export default function Index() {
  
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
    const [isLoading, setIsLoading] = useState(true)
  const [selecionados, setSelecionados] = useState<string[]>([])

  function mudancaDeSelecao(value: string){
    if (selecionados.includes(value)){
      return setSelecionados((state) => state.filter(i => i !== value))
    }
    setSelecionados(state => [...state, value])
  }

  useEffect(() => {
    console.log(selecionados)
  }, [selecionados])

  const handleClear = () => {
    Alert.alert("Limpar seleção", "Deseja limpar a seleção?", [{
      text: "Cancelar",
      style: "cancel",
    },
    {
      text: "Limpar",
      onPress: () => setSelecionados([]),
    }])
  }

  const handlerSearch = () => {
   Alert.alert("Buscar receitas", "Deseja buscar receitas com os ingredientes selecionados?", [{
    text: "Cancelar",
    style: "cancel",
  },
{
  text: "Buscar",
  onPress: () => router.navigate(`../recipes/${selecionados.join(",")}`),
}])
  }

useEffect(() => {
   services.ingredients.findAll()
     .then((data) => setIngredients(data))
     .finally(() => setIsLoading(false));
  
}, [])

 if (isLoading) {
       return <Loading />
     }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {'\n'}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>

      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu
        </Text>

      
        <Ingredients
          ingredients={ingredients}
          selecionados={selecionados}
          onChange={mudancaDeSelecao}
          horizontal={false}
        />
      

            {selecionados.length > 0 && (
      <Selected
        quantity={selecionados.length}
        onClear={() => handleClear()}
        onSearch={() =>handlerSearch()}
      />
    )}
    </View>
  );
}