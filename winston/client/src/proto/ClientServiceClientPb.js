/**
 * @fileoverview gRPC-Web generated client stub for wordlist
 * @enhanceable
 * @public
 */
// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.11.4
// source: proto/client.proto
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from "grpc-web";
import * as proto_client_pb from "./client_pb";
export class UserServiceClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorgetWordlist = new grpcWeb.MethodDescriptor("/wordlist.UserService/getWordlist", grpcWeb.MethodType.UNARY, proto_client_pb.Empty, proto_client_pb.wordlist, (request) => {
            return request.serializeBinary();
        }, proto_client_pb.wordlist.deserializeBinary);
        this.methodDescriptoraddNewWordlist = new grpcWeb.MethodDescriptor("/wordlist.UserService/addNewWordlist", grpcWeb.MethodType.UNARY, proto_client_pb.wordlist, proto_client_pb.Response, (request) => {
            return request.serializeBinary();
        }, proto_client_pb.Response.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options["format"] = "text";
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname.replace(/\/+$/, "");
        this.credentials_ = credentials;
        this.options_ = options;
    }
    getWordlist(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ + "/wordlist.UserService/getWordlist", request, metadata || {}, this.methodDescriptorgetWordlist, callback);
        }
        return this.client_.unaryCall(this.hostname_ + "/wordlist.UserService/getWordlist", request, metadata || {}, this.methodDescriptorgetWordlist);
    }
    addNewWordlist(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ + "/wordlist.UserService/addNewWordlist", request, metadata || {}, this.methodDescriptoraddNewWordlist, callback);
        }
        return this.client_.unaryCall(this.hostname_ + "/wordlist.UserService/addNewWordlist", request, metadata || {}, this.methodDescriptoraddNewWordlist);
    }
}
