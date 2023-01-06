import { Input, SelectDropdown } from 'common';
import * as React from 'react';
import { useForm } from 'react-hook-form';

export const NewEmployeeForm = () => {
  const onSubmit = (data) => {
    alert('Added to the team!');
    reset();
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Name" {...register('name', { required: true })} error={errors.name} />
      <Input
        label="Function"
        {...register('function', { required: true })}
        error={errors.function}
      />
      {/* <SelectDropdown
        name="office_id"
        label="Office"
        {...register('office_id', { required: true })}
        error={errors.office_id}
        defaultValue={{ value: 'chocolate', label: 'Chocolate' }}
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
        ]}
      /> */}
      <Input
        label="Birth date"
        {...register('birthdate', { required: true })}
        error={errors.birthdate}
      />
      <Input label="Favorite Pet" {...register('favorite_pet')} error={errors.favorite_pet} />
      <Input label="Favorite Food" {...register('favorite_food')} error={errors.favorite_food} />
      <input type="submit" />
    </form>
  );
};
