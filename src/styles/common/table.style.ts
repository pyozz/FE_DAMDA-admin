import styled from '@emotion/styled';
import theme from '../theme';

export const TableContainer = styled.div`
  width: 1200px;
`;
export const Table = styled.table`
  width: 100%;
`;
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr`
  border-bottom: 1px solid ${theme.colors.yolda_gray_5};
`;
export const Th = styled.th`
  ${theme.font.bold_14}
  padding: 5px 20px;
  height: 72px;
  color: #718096;
  font-size: 14px;
  text-align: left;
  vertical-align: middle;
  white-space: nowrap;
`;
export const Td = styled.td`
  padding: 5px 20px;
  max-width: 220px;
  height: 80px;
  font-weight: 500;
  vertical-align: middle;
  word-break: keep-all;
`;