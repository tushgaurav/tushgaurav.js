// Table.tsx\
// https://github.com/maticzav/ink-table/issues/268

import React from 'react';
import {Box, Text} from 'ink';

type Scalar = string | number | boolean | null | undefined;

type ScalarDict = {
	[key: string]: Scalar;
};

type Column = {
	key: string;
	width: number;
};

type TableProps = {
	data: ScalarDict[];
	showHeaders?: boolean;
	headerStyles?: {
		color?: string;
		backgroundColor?: string;
		bold?: boolean;
		italic?: boolean;
		underline?: boolean;
		inverse?: boolean;
		strikethrough?: boolean;
		dimColor?: boolean;
	};
};

// Helper function to generate headers from data
function generateHeaders(data: ScalarDict[]): ScalarDict {
	let headers: ScalarDict = {};

	data.forEach(row => {
		Object.keys(row).forEach(key => {
			headers[key] = key;
		});
	});

	return headers;
}

const Table = ({data, showHeaders = true, headerStyles}: TableProps) => {
	// Determine columns and their widths
	const columns: Column[] = getColumns(data);

	return (
		<Box flexDirection="column">
			{renderHeaderSeparators(columns)}

			{showHeaders && (
				<>
					{renderRow(generateHeaders(data), columns, {
						color: 'blue',
						bold: true,
						...headerStyles,
					})}
					{renderRowSeparators(columns)}
				</>
			)}

			{data.map((row, index) => (
				<React.Fragment key={`row-${index}`}>
					{index !== 0 && renderRowSeparators(columns)}
					{renderRow(row, columns)}
				</React.Fragment>
			))}
			{renderFooterSeparators(columns)}
		</Box>
	);
};

// Helper function to determine columns and their widths
function getColumns(data: ScalarDict[]): Column[] {
	let columnWidths: {[key: string]: number} = {};

	data.forEach(row => {
		Object.keys(row).forEach(key => {
			const valueLength = row[key]?.toString().length || 0;
			columnWidths[key] = Math.max(
				columnWidths[key] || key.length,
				valueLength,
			);
		});
	});

	return Object.keys(columnWidths).map(key => ({
		key: key,
		width: (columnWidths[key] ?? 0) + 2, // adding padding
	}));
}

// Helper function to render a row with separators
function renderRow(row: ScalarDict, columns: Column[], textStyles?: any) {
	return (
		<Box flexDirection="row">
			<Text>│</Text>
			{columns.map((column, index) => (
				<React.Fragment key={column.key}>
					{index !== 0 && <Text>│</Text>}
					{/* Add separator before each cell except the first one */}
					<Box width={column.width} justifyContent="center">
						<Text {...textStyles}>{row[column.key]?.toString() || ''}</Text>
					</Box>
				</React.Fragment>
			))}
			<Text>│</Text>
		</Box>
	);
}

function renderHeaderSeparators(columns: Column[]) {
	return renderRowSeparators(columns, '┌', '┬', '┐');
}

function renderFooterSeparators(columns: Column[]) {
	return renderRowSeparators(columns, '└', '┴', '┘');
}

function renderRowSeparators(
	columns: Column[],
	leftChar = '├',
	midChar = '┼',
	rightChar = '┤',
) {
	return (
		<Box flexDirection="row">
			<Text>{leftChar}</Text>
			{columns.map((column, index) => (
				<React.Fragment key={column.key}>
					<Text>{'─'.repeat(column.width)}</Text>
					{index < columns.length - 1 ? (
						<Text>{midChar}</Text>
					) : (
						<Text>{rightChar}</Text>
					)}
				</React.Fragment>
			))}
		</Box>
	);
}

export default Table;