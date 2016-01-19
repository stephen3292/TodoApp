class Api::StepsController < ApplicationController
  def index
    render json: Step.where(todo_id: params[:todo_id]).order(:ord).to_json
  end

  def create
  todo = Todo.find(params[:todo_id])
  step = todo.steps.new(step_params)
    if step.save
      render json: step
    else
      render json: { errors: step.errors.full_messages }, status: 422
    end
  end

  def destroy
    step = Step.find(params[:id])
    step.destroy
    render json: step
  end

  def update
    step = Step.find(params[:id])
    if step.update(step_params)
      render json: step
    else
      render json: { errors: step.errors.full_messages }, status: 422
    end
  end


  private
  def step_params
    params.require(:step).permit(:step, :ord, :done)
  end
end
