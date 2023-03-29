import {
  TextInput,
  Checkbox,
  Button,
  Group,
  SimpleGrid,
  Card,
  Title,
  Autocomplete,
  MultiSelect,
  FileInput,
  NumberInput,
  Radio,
} from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Forms() {
  const form = useForm({
    initialValues: {
      email: '',
      framework: '',
      frameworks: '',
      file: '',
      age: '',
      radio: '',
      termsOfService: false,
    },
    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
    validateInputOnChange: true,
  });

  return (
    <Card shadow='sm' padding='md' radius='md' withBorder>
      <Title order={2} mb='md'>
        Forms Example
      </Title>

      <form onSubmit={form.onSubmit(values => console.log(values))}>
        <SimpleGrid
          cols={4}
          breakpoints={[
            { maxWidth: '90em', cols: 3 },
            { maxWidth: '64em', cols: 2 },
            { maxWidth: '36rem', cols: 1 },
          ]}
          spacing='md'
        >
          <TextInput required label='Email' placeholder='your@email.com' {...form.getInputProps('email')} />
          <Autocomplete
            label='Your favorite framework/library'
            placeholder='Pick one'
            data={['React', 'Angular', 'Svelte', 'Vue']}
            {...form.getInputProps('framework')}
          />
          <MultiSelect
            data={[
              { value: 'react', label: 'React' },
              { value: 'ng', label: 'Angular' },
              { value: 'svelte', label: 'Svelte' },
              { value: 'vue', label: 'Vue' },
              { value: 'riot', label: 'Riot' },
              { value: 'next', label: 'Next.js' },
              { value: 'blitz', label: 'Blitz.js' },
            ]}
            label='Your favorite frameworks/libraries'
            placeholder='Pick all that you like'
            searchable
            {...form.getInputProps('frameworks')}
          />
          <FileInput
            label='Upload files'
            placeholder='Upload files'
            accept='image/png,image/jpeg'
            {...form.getInputProps('file')}
          />
          <NumberInput
            placeholder='Your age'
            label='Your age'
            withAsterisk
            {...form.getInputProps('age')}
            hideControls
          />
          <Radio.Group
            name='favoriteFramework'
            label='Select your favorite framework/library'
            {...form.getInputProps('radio')}
          >
            <Group mt='xs'>
              <Radio value='react' label='React' />
              <Radio value='svelte' label='Svelte' />
              <Radio value='ng' label='Angular' />
              <Radio value='vue' label='Vue' />
            </Group>
          </Radio.Group>
        </SimpleGrid>

        <Checkbox
          mt='md'
          label='I agree to sell my privacy'
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position='right' mt='md'>
          <Button type='submit'>Submit</Button>
        </Group>
      </form>
    </Card>
  );
}
