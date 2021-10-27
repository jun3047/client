import Card from '@components/base/Card';
import Icons from '@components/base/Icons';

export default {
  title: 'Component/Base/Card',
  component: { Card, Icons },
  argTypes: {
    width: {
      defaultValue: 265,
      control: 'number',
    },
    height: {
      defaultValue: null,
      control: 'number',
    },
    backgroundColor: {
      control: 'color',
    },
    onClick: { action: 'onClick' },
  },
};

export const EmptyCard = args => {
  return (
    <Card width="265px" {...args}>
      <Icons backgroundColor="none">
        <Icons.Add fontSize="50px" color="black" />
      </Icons>
      <div>카드 추가!</div>
    </Card>
  );
};

export const FilledCard = args => {
  return (
    <div style={{ display: 'inline-flex' }}>
      <Card width="265px" backgroundColor="blue" {...args} />
      <Card width="265px" backgroundColor="red" {...args} />
      <Card width="265px" backgroundColor="royalblue" {...args} />
    </div>
  );
};
