import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default function List({ item, converted }: { item: { currency: string; symbol: string; rate: number }; converted: (rate: number, currency: string) => string }) {
    return (
        <View style={styles.row}>
            <View>
                <Text style={styles.currency}>{item.currency}</Text>
                <Text style={styles.rate}>1 MYR = {item.rate} {item.currency}</Text>
            </View>
            <Text style={styles.result}>
                {item.symbol} {converted(item.rate, item.currency)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    row: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    currency: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1a1a1a',
    },
    rate: {
        fontSize: 12,
        color: '#aaa',
        marginTop: 2,
    },
    result: {
        fontSize: 20,
        fontWeight: '600',
        color: '#2563eb',
    },
});