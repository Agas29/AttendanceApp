import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Home = () => {
    const presentCount = history.filter(h => h.status === "Present").length;
    const absentCount = history.filter(h => h.status === "Absent").length;

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View>
                <Text style={styles.course}>{item.course}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>

            <View style={styles.statusContainer}>
                <MaterialIcons
                    name={item.status === "Present" ? "check" : "close"}
                    size={16}
                    color={item.status === "Present" ? "green" : "red"}
                />
                <Text style={[
                    item.status === "Present" ? styles.present : styles.absent,
                    { marginLeft: 4 }
                ]}>
                    {item.status}
                </Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Attendance App</Text>

                <View style={styles.card}>
                    <View style={styles.icon}>
                        <MaterialIcons name="person" size={40} color="#555" />
                    </View>
                    <View>
                        <Text style={styles.name}>Anggoro Gigis Adi Saputro</Text>
                        <Text>NIM : 0920240002</Text>
                        <Text>Class : Software Engineering - 2B</Text>
                    </View>
                </View>

                <View style={styles.classCard}>
                    <Text style={styles.subtitle}>Today's Class</Text>
                    <Text>Mobile Programming</Text>
                    <Text>08:00 - 10:00</Text>
                    <Text>Lab 3</Text>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>CHECK IN</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.classCard}>
                    <Text style={styles.subtitle}>Upcoming Class</Text>
                    <Text>Database Systems</Text>
                    <Text>10:00 - 12:00</Text>
                    <Text>Lab 4</Text>
                </View>

                <View style={styles.classCard}>
                    <Text style={styles.subtitle}>Attendance Summary</Text>
                    <Text>Present : {presentCount}</Text>
                    <Text>Absent : {absentCount}</Text>
                </View>

                <Text style={styles.subtitle}>Attendance History</Text>
                <FlatList
                    data={history}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    scrollEnabled={false}
                />

            </ScrollView>
        </SafeAreaView>
    );
};

const history = [
    { id: "1", course: "Mobile Programming",date: "2026-03-01", status: "Present" },
    { id: "2", course: "Database Systems", date: "2026-03-02", status: "Present" },
    { id: "3", course: "Operating Systems", date: "2026-03-03", status: "Absent" },
    { id: "4", course: "Computer Network", date: "2026-03-04", status: "Present" },
    { id: "5", course: "Software Engineering", date: "2026-03-05", status: "Absent" },
    { id: "6", course: "Web Development", date: "2026-03-06", status: "Present" },
    { id: "7", course: "Data Structures", date: "2026-03-07", status: "Present" },
    { id: "8", course: "Algorithms", date: "2026-03-08", status: "Absent" },
    { id: "9", course: "Mobile Programming", date: "2026-03-09", status: "Present" },
    { id: "10", course: "Database Systems", date: "2026-03-10", status: "Present" },
    { id: "11", course: "Operating Systems", date: "2026-03-11", status: "Absent" },
    { id: "12", course: "Computer Network", date: "2026-03-12", status: "Present" },
    { id: "13", course: "Software Engineering", date: "2026-03-13", status: "Present" },
    { id: "14", course: "Web Development", date: "2026-03-14", status: "Absent" },
    { id: "15", course: "Data Structures", date: "2026-03-15", status: "Present" },
    { id: "16", course: "Algorithms", date: "2026-03-16", status: "Present" },
    { id: "17", course: "Mobile Programming", date: "2026-03-17", status: "Absent" },
    { id: "18", course: "Database Systems", date: "2026-03-18", status: "Present" },
    { id: "19", course: "Operating Systems", date: "2026-03-19", status: "Present" },
    { id: "20", course: "Computer Network", date: "2026-03-20", status: "Absent" },
    { id: "21", course: "Software Engineering", date: "2026-03-21", status: "Present" },
    { id: "22", course: "Web Development", date: "2026-03-22", status: "Present" },
    { id: "23", course: "Data Structures", date: "2026-03-23", status: "Absent" },
    { id: "24", course: "Algorithms", date: "2026-03-24", status: "Present" },
    { id: "25", course: "Mobile Programming", date: "2026-03-25", status: "Present" },
];

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
    },

    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },

    icon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15,
    },

    name:{
        fontSize: 18,
        fontWeight: "bold",
    },

    classCard:{
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },

    subtitle:{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },

    button:{
        marginTop: 10,
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
    },

    content: {
        padding: 20,
        paddingBottom: 40,
    },

    item:{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
    },

    course:{
        fontSize: 16
    },

    date:{
        color: "gray",
        fontSize: 12,
    },

    present:{
        color: "green",
        fontWeight: "bold",
    },

    absent:{
        color: "red",
        fontWeight: "bold",
    },

    statusContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    summaryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    }

});