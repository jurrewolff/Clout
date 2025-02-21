/**
 * @fileoverview gRPC-Web generated client stub for wlservice
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: wordlist.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as wordlist_pb from './wordlist_pb';


export class WordlistServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorloadAllWordlists = new grpcWeb.MethodDescriptor(
    '/wlservice.WordlistService/loadAllWordlists',
    grpcWeb.MethodType.UNARY,
    wordlist_pb.UserId,
    wordlist_pb.Wordlists,
    (request: wordlist_pb.UserId) => {
      return request.serializeBinary();
    },
    wordlist_pb.Wordlists.deserializeBinary
  );

  loadAllWordlists(
    request: wordlist_pb.UserId,
    metadata: grpcWeb.Metadata | null): Promise<wordlist_pb.Wordlists>;

  loadAllWordlists(
    request: wordlist_pb.UserId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wordlist_pb.Wordlists) => void): grpcWeb.ClientReadableStream<wordlist_pb.Wordlists>;

  loadAllWordlists(
    request: wordlist_pb.UserId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wordlist_pb.Wordlists) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wlservice.WordlistService/loadAllWordlists',
        request,
        metadata || {},
        this.methodDescriptorloadAllWordlists,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wlservice.WordlistService/loadAllWordlists',
    request,
    metadata || {},
    this.methodDescriptorloadAllWordlists);
  }

  methodDescriptoraddNewWordlist = new grpcWeb.MethodDescriptor(
    '/wlservice.WordlistService/addNewWordlist',
    grpcWeb.MethodType.UNARY,
    wordlist_pb.WordlistInfo,
    wordlist_pb.Response,
    (request: wordlist_pb.WordlistInfo) => {
      return request.serializeBinary();
    },
    wordlist_pb.Response.deserializeBinary
  );

  addNewWordlist(
    request: wordlist_pb.WordlistInfo,
    metadata: grpcWeb.Metadata | null): Promise<wordlist_pb.Response>;

  addNewWordlist(
    request: wordlist_pb.WordlistInfo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wordlist_pb.Response) => void): grpcWeb.ClientReadableStream<wordlist_pb.Response>;

  addNewWordlist(
    request: wordlist_pb.WordlistInfo,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wordlist_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wlservice.WordlistService/addNewWordlist',
        request,
        metadata || {},
        this.methodDescriptoraddNewWordlist,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wlservice.WordlistService/addNewWordlist',
    request,
    metadata || {},
    this.methodDescriptoraddNewWordlist);
  }

  methodDescriptorgetWordsOfWordList = new grpcWeb.MethodDescriptor(
    '/wlservice.WordlistService/getWordsOfWordList',
    grpcWeb.MethodType.UNARY,
    wordlist_pb.Id,
    wordlist_pb.WordlistInfo,
    (request: wordlist_pb.Id) => {
      return request.serializeBinary();
    },
    wordlist_pb.WordlistInfo.deserializeBinary
  );

  getWordsOfWordList(
    request: wordlist_pb.Id,
    metadata: grpcWeb.Metadata | null): Promise<wordlist_pb.WordlistInfo>;

  getWordsOfWordList(
    request: wordlist_pb.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wordlist_pb.WordlistInfo) => void): grpcWeb.ClientReadableStream<wordlist_pb.WordlistInfo>;

  getWordsOfWordList(
    request: wordlist_pb.Id,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wordlist_pb.WordlistInfo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wlservice.WordlistService/getWordsOfWordList',
        request,
        metadata || {},
        this.methodDescriptorgetWordsOfWordList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wlservice.WordlistService/getWordsOfWordList',
    request,
    metadata || {},
    this.methodDescriptorgetWordsOfWordList);
  }

  methodDescriptorgetWordExceptIDs = new grpcWeb.MethodDescriptor(
    '/wlservice.WordlistService/getWordExceptIDs',
    grpcWeb.MethodType.UNARY,
    wordlist_pb.Filter,
    wordlist_pb.WordlistInfo,
    (request: wordlist_pb.Filter) => {
      return request.serializeBinary();
    },
    wordlist_pb.WordlistInfo.deserializeBinary
  );

  getWordExceptIDs(
    request: wordlist_pb.Filter,
    metadata: grpcWeb.Metadata | null): Promise<wordlist_pb.WordlistInfo>;

  getWordExceptIDs(
    request: wordlist_pb.Filter,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wordlist_pb.WordlistInfo) => void): grpcWeb.ClientReadableStream<wordlist_pb.WordlistInfo>;

  getWordExceptIDs(
    request: wordlist_pb.Filter,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wordlist_pb.WordlistInfo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wlservice.WordlistService/getWordExceptIDs',
        request,
        metadata || {},
        this.methodDescriptorgetWordExceptIDs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wlservice.WordlistService/getWordExceptIDs',
    request,
    metadata || {},
    this.methodDescriptorgetWordExceptIDs);
  }

}

