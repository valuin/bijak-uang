'use server';

import { createClient } from '@/utils/supabase/server';

export async function getTransactions(): Promise<any> {
  const supabase = createClient();

  const { data, error } = await supabase.from('transactions').select('*');

  if (error) {
    console.log(error);
    return error;
  }

  return data;
}

export async function getTransactionsByMonth(): Promise<any> {
  const supabase = createClient();

  const { data, error } = await supabase.from('transactions').select('*');

  if (error) {
    console.log(error);
    return error;
  }

  const categorizedTransactions: Record<string, Record<string, any[]>> = {};

  data.forEach((transaction: any) => {
    const date = new Date(transaction.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });

    if (!categorizedTransactions[year]) {
      categorizedTransactions[year] = {};
    }

    if (!categorizedTransactions[year][month]) {
      categorizedTransactions[year][month] = [];
    }

    categorizedTransactions[year][month].push(transaction);
  });

  const transactionsArray: any[] = [];

  for (const year in categorizedTransactions) {
    for (const month in categorizedTransactions[year]) {
      transactionsArray.push({
        year: year,
        month: month,
        transactions: categorizedTransactions[year][month],
      });
    }
  }

  transactionsArray.sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months.indexOf(b.month) - months.indexOf(a.month);
  });

  return transactionsArray;
}

export async function getTotalProfitByMonth(): Promise<any> {
  const supabase = createClient();

  const { data, error } = await supabase.from('transactions').select('*');

  if (error) {
    console.error('Error fetching transactions:', error);
    return error;
  }

  interface TransactionRecord {
    year: number;
    month: string;
    profit: number;
  }

  const categorizedTransactions: Record<string, TransactionRecord> = {};

  data.forEach((transaction: any) => {
    const date = new Date(transaction.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const yearMonthKey = `${year}-${month}`;

    if (!categorizedTransactions[yearMonthKey]) {
      categorizedTransactions[yearMonthKey] = {
        year: year,
        month: month,
        profit: 0,
      };
    }

    if (transaction.type === 'Income') {
      categorizedTransactions[yearMonthKey].profit += transaction.amount;
    } else if (transaction.type === 'Expense') {
      categorizedTransactions[yearMonthKey].profit -= transaction.amount;
    }
  });

  const totalProfitArray: any[] = [];

  for (const key in categorizedTransactions) {
    totalProfitArray.push(categorizedTransactions[key]);
  }

  return totalProfitArray;
}

export async function getTotalIncomeByMonth(): Promise<any> {
  const supabase = createClient();

  const { data, error } = await supabase.from('transactions').select('*');

  if (error) {
    console.error('Error fetching transactions:', error);
    return error;
  }

  interface TransactionRecord {
    year: number;
    month: string;
    income: number;
  }

  const categorizedTransactions: Record<string, TransactionRecord> = {};

  data.forEach((transaction: any) => {
    const date = new Date(transaction.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const yearMonthKey = `${year}-${month}`;

    if (!categorizedTransactions[yearMonthKey]) {
      categorizedTransactions[yearMonthKey] = {
        year: year,
        month: month,
        income: 0,
      };
    }

    if (transaction.type === 'Income') {
      categorizedTransactions[yearMonthKey].income += transaction.amount;
    }
  });

  const totalIncomeArray: any[] = [];

  for (const key in categorizedTransactions) {
    totalIncomeArray.push(categorizedTransactions[key]);
  }

  return totalIncomeArray;
}

export async function getTotalIncomeForTable(): Promise<any> {
  const supabase = createClient();

  const { data, error } = await supabase.from('transactions').select('*');

  if (error) {
    console.error('Error fetching transactions:', error);
    return error;
  }

  // Filter out transactions with type 'Expense'
  const filteredTransactions = data.filter((transaction: any) => {
    return transaction.type === 'Income';
  });

  // sort transactions by date
  filteredTransactions.sort((a: any, b: any) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return filteredTransactions;
}

export async function getTotalExpenseByMonth(): Promise<any> {
  const supabase = createClient();

  const { data, error } = await supabase.from('transactions').select('*');

  if (error) {
    console.error('Error fetching transactions:', error);
    return error;
  }

  const categorizedTransactions: Record<string, number> = {};

  data.forEach((transaction: any) => {
    const date = new Date(transaction.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const yearMonthKey = `${year}-${month}`;

    if (!categorizedTransactions[yearMonthKey]) {
      categorizedTransactions[yearMonthKey] = 0;
    }

    if (transaction.type === 'Expense') {
      categorizedTransactions[yearMonthKey] += transaction.amount;
    }
  });

  const totalExpenseArray: any[] = [];

  for (const key in categorizedTransactions) {
    totalExpenseArray.push({
      month: key,
      expenses: categorizedTransactions[key],
    });
  }

  return totalExpenseArray;
}

export async function getTotalExpenseForTable(): Promise<any> {
  const supabase = createClient();

  const { data, error } = await supabase.from('transactions').select('*');

  if (error) {
    console.error('Error fetching transactions:', error);
    return error;
  }

  // Filter out transactions with type 'Income'
  const filteredTransactions = data.filter((transaction: any) => {
    return transaction.type === 'Expense';
  });

  // sort transactions by date
  filteredTransactions.sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return filteredTransactions;
}
