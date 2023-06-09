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
import { DatePickerInput } from '@mantine/dates';
import dayjs from 'dayjs';

export default function ModalForm() {
  const form = useForm({
    initialValues: {
      email: '',
      framework: '',
      frameworks: '',
      file: '',
      age: '',
      radio: '',
      termsOfService: false,
      date: null,
      dates: [null],
      past: null,
      future: null,
    },
    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
    validateInputOnChange: true,
  });

  return (
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
        <NumberInput placeholder='Your age' label='Your age' withAsterisk {...form.getInputProps('age')} hideControls />
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
        <DatePickerInput label='Pick date' placeholder='Pick date' {...form.getInputProps('date')} />
        <DatePickerInput type='range' label='Pick dates' placeholder='Pick dates' {...form.getInputProps('dates')} />
        <DatePickerInput type='range' label='Pick dates' placeholder='Pick dates' {...form.getInputProps('dates')} />
        <DatePickerInput
          label='Pick dates past'
          placeholder='Pick dates past'
          {...form.getInputProps('past')}
          maxDate={dayjs().toDate()}
        />
        <DatePickerInput
          label='Pick dates future'
          placeholder='Pick dates future'
          {...form.getInputProps('future')}
          minDate={dayjs().toDate()}
        />
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
  );
}
