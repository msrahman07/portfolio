FROM python:3.8

ENV PYTHONDONTWRITEBYTECODE=1

ENV PYTHONUNBUFFERED 1

# RUN mkdir /portfolio

WORKDIR /portfolio

RUN pip install --upgrade pip

RUN pip install --upgrade pip wheel

RUN pip install backports.zoneinfo

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .