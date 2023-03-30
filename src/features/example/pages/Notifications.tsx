import { Button, Card, Group, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';

export default function Notifications() {
  return (
    <Card shadow='sm' padding='md' radius='md' withBorder>
      <Title order={2} mb='md'>
        Notification Example
      </Title>
      <Group position='center'>
        <Button
          variant='outline'
          onClick={() =>
            notifications.show({
              title: 'Success notification',
              message: 'Hey there, your code is awesome! 🤥',
              color: 'green',
            })
          }
        >
          Show Success
        </Button>
        <Button
          variant='outline'
          onClick={() =>
            notifications.show({
              title: 'Error notification',
              message: 'Hey there, your code is awesome! 🤥',
              color: 'red',
            })
          }
        >
          Show Error
        </Button>
        <Button
          variant='outline'
          onClick={() =>
            notifications.show({
              title: 'Info notification',
              message: 'Hey there, your code is awesome! 🤥',
            })
          }
        >
          Show Info
        </Button>
      </Group>
    </Card>
  );
}
