import { Button, Text, Card, Title } from '@mantine/core';
import { modals } from '@mantine/modals';
import ModalForm from '../components/ModalForm';

export default function Modals() {
  const openModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size='sm'>
          This action is so important that you are required to confirm it with a modal. Please click one of these
          buttons to proceed.
        </Text>
      ),
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  const openFormModal = () =>
    modals.open({
      title: 'Please fill the form',
      children: <ModalForm />,
    });

  return (
    <Card shadow='sm' padding='md' radius='md' withBorder sx={{ overflow: 'visible' }}>
      <Title order={2} mb='md'>
        Modals Example
      </Title>
      <Button onClick={openModal}>Open confirm modal</Button>
      <Button onClick={openFormModal} ml='xl'>
        Open form modal
      </Button>
    </Card>
  );
}
