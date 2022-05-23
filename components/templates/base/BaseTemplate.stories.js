import BaseTemplate from './BaseTemplate';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Templates/BaseTemplate',
  component: BaseTemplate,
};

export const Primary = () => <BaseTemplate primary>BaseTemplate</BaseTemplate>;
