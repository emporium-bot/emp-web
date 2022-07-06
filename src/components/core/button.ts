import { styled } from '@/theme';

export const Button = styled('button', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	color: '$void',
	backgroundColor: '$primary',
	fontSize: '$1',
	padding: '$2 $3',
	borderRadius: '$md',
	border: 'none',

	'&:hover': {
		cursor: 'pointer',
	},
});
