import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import List from '../component/list';


const RATES: { currency: string; symbol: string; rate: number }[] = [
    { currency: 'EUR', symbol: '€', rate: 0.2165 },
    { currency: 'GBP', symbol: '£', rate: 0.1879 },
    { currency: 'JPY', symbol: '¥', rate: 39.95 },
    { currency: 'INR', symbol: '₹', rate: 23.65 },
    { currency: 'IDR', symbol: 'Rp', rate: 4230.47 },
];

export default function MainScreen() {
    const [amount, setAmount] = useState('');

    const converted = (rate: number, currency: string) => {
        const num = parseFloat(amount);
        if (isNaN(num) || amount === '') return '—';

        const result = num * rate;
        if (currency === 'JPY' || currency === 'IDR') {
            return Math.ceil(result).toLocaleString();
        }
        return result.toFixed(4);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Currency Converter</Text>
            <Text style={styles.subtitle}>Enter amount in RM</Text>

            <View style={styles.inputWrapper}>
                <Text style={styles.myrCurrency}>RM</Text>
                <TextInput
                    style={styles.input}
                    value={amount}
                    onChangeText={setAmount}
                    placeholder="0.00"
                    placeholderTextColor="black"
                    keyboardType="numeric"
                />
            </View>

            <FlatList
                data={RATES}
                keyExtractor={(item) => item.currency}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <List item={item} converted={converted} />
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: '#1a1a1a',
    },
    subtitle: {
        textAlign: 'center',
        color: '#888',
        marginBottom: 16,
        fontSize: 14,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
        marginBottom: 20,
    },
    myrCurrency: {
        fontSize: 24,
        color: '#333',
        marginRight: 6,
    },
    input: {
        flex: 1,
        fontSize: 32,
        fontWeight: '600',
        color: '#1a1a1a',
    },
    usdLabel: {
        fontSize: 16,
        color: '#888',
        fontWeight: '500',
    },
    list: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },

    result: {
        fontSize: 20,
        fontWeight: '600',
        color: '#2563eb',
    },
});
