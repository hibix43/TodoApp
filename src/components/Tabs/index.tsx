import React from 'react';
import styled from 'styled-components';
import { StyledProps, TabContent as TabContentType } from '../../types';
import { TabContent } from '../TabContent';
import { TabNavigation } from '../TabNavigation';

type Props = {
  content: TabContentType;
  tabTitltes: string[];
};

const Component: React.VFC<Props & StyledProps> = ({
  className,
  content,
  tabTitltes
}) => {
  return (
    <div className={className}>
      <TabNavigation selectedTabTitle={content.title} tabTitles={tabTitltes} />
      <TabContent key={content.id}>{content.content}</TabContent>
    </div>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
`;

type OuterProps = {
  selectedTabId: number; // TODO: tab をクリックすることで切り替えられるように id を state に持つ
  contents: TabContentType[];
};

const Container: React.VFC<OuterProps> = ({ selectedTabId, contents }) => {
  const selectedContent = contents.find(
    (content) => content.id === selectedTabId
  );
  const tabTitles = contents.map((content) => content.title);
  if (selectedContent) {
    return <StyledComponent content={selectedContent} tabTitltes={tabTitles} />;
  }
  return <></>;
};

export const Tabs = Container;
