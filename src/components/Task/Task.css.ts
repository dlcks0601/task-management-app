import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/globalStyle.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: vars.spacing.medium,
  backgroundColor: vars.color.task.base,
  borderRadius: 10,
  marginBottom: vars.spacing.big2,
  boxShadow: vars.shadow.basic,
  cursor: 'pointer',
  ':hover': {
    transform: 'scale(1.03)',
  },
});

export const title = style({
  fontSize: vars.fontSize.T4,
  fontWeight: 'bold',
});

export const desc = style({
  fontSize: vars.fontSize.P1,
  marginTop: vars.spacing.small,
});
