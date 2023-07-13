import { UserListData } from '@/types/api/user';

export const DummyUsers = [
  {
    id: 0,
    name: '김코딩',
    phoneNumber: '010-1234-1234',
    address: '서울시 강서구 열다로 111',
    reservationStatus: 'WAITING_FOR_MANAGER_REQUEST',
    createdAt: '2023-01-01',
    memo: '강아지 2마리 키움',
    code: 'XD4E91',
  },
  {
    id: 1,
    name: '박코딩',
    phoneNumber: '010-1234-1234',
    address: '서울시 강서구 열다로 111',
    reservationStatus: 'WAITING_FOR_ACCEPT_MATCHING',
    createdAt: '2023-01-01',
    memo: '고양이 1마리',
    code: 'XD4E91',
  },
  {
    id: 2,
    name: '최코딩',
    phoneNumber: '010-1234-1234',
    address: '서울시 강서구 열다로 111',
    reservationStatus: 'MANAGER_MATCHING_COMPLETED',
    createdAt: '2023-01-01',
    memo: '옷 구겨짐에 예민',
    code: 'XD4E91',
  },
  {
    id: 3,
    name: '이코딩',
    phoneNumber: '010-1234-1234',
    address: '서울시 강서구 열다로 111',
    reservationStatus: 'SERVICE_COMPLETED',
    createdAt: '2023-01-01',
    memo: '없음',
    code: 'XD4E91',
  },
  {
    id: 4,
    name: '허코딩',
    phoneNumber: '010-1234-1234',
    address: '서울시 강서구 열다로 111',
    reservationStatus: 'RESERVATION_CANCELLATION',
    createdAt: '2023-01-01',
    memo: '없음',
    code: 'XD4E91',
  },
] as UserListData[];