import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    Image,
    Button,
  } from "react-native";
  import { useQuery, useMutation } from "@tanstack/react-query"; // Hook para fazer queries
  import fetchPost, { createUser } from "./api/posts"; // Função para buscar users
  import { SafeAreaView } from "react-native-safe-area-context";
  
  // NATHAN, ACTIVITY INDICATOR É A BOLINHA QUE FICA RODANDO PARA MOSTRAR QUE TÁ CARREGABDI
  
  export default function App() {
    // O useQuery é o hook principal do Tanstack Query
    // dentro dele vai ter o queryKey: Chave única para identificar essa query
    // Também terá detro do hook o Query Fn: Função que executa a requisição
    const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
      queryKey: ["posts"],
      queryFn: fetchPost,
    });
  
    const mutation = useMutation({
      mutationFn: createUser,
      onSuccess: () => refetch(),
    });
  
    // Exibe um spinner (Activity indicator) enquanto os dados estão sendo carregados
    if (isLoading) {
      return <ActivityIndicator size="large" style={styles.center} />;
    }
  
    // Exibe uma msg de error, se houver falha na requisição
    if (isError) {
      return (
        <View style={styles.center}>
          <Text>Error ao buscar os dados</Text>
          <Text>Mensagem de erro:{error.message}</Text>
        </View>
      );
    }
    return (
      <SafeAreaView>
        <Text style={{textAlign:"center", fontWeight: "bold", marginBottom: 4,}} >LISTA DE USUÁRIOS</Text>
  
        <FlatList
          data={data}
          refreshing={isFetching} // isFetching mostra o spinner durante o refetch
          onRefresh={refetch} // refetch faz o refresh da lista
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.containerImg}>
                <Text style={styles.info}>
                  <Text style={{ fontWeight: 'bold' }}>Nome:</Text> {item.name}
                </Text>
              </View>
              <Text style={styles.info}>
                <Text style={{ fontWeight: 'bold' }}>Email:</Text> {item.email}
              </Text>
              <Text style={styles.info}>
                <Text style={{ fontWeight: 'bold' }}>Cidade:</Text> {item.address.city}
              </Text>
            </View>
        )}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      color: "#ff0000",
    },
    item: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    img: {
      borderRadius: 360,
    },
    containerImg: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
  });
  