// Based on the DefinitelyTyped typings for react-redux (2.1.2)

/// <reference types="preact" />
/// <reference types="redux" />

declare module "preact-redux" {
  import { Component, ComponentConstructor } from 'preact';
  import { Store, Dispatch, ActionCreator } from 'redux';

  export abstract class ElementClass extends Component<any, any> { }
  export interface ClassDecorator {
    <T extends (typeof ElementClass)>(component: T): T
  }

  interface StatelessComponent<P> {
    (props: P & { children?: any }, context?: any): JSX.Element
  }

  export interface ComponentDecorator<TOriginalProps, TOwnProps> {
    (
      component: ComponentConstructor<TOriginalProps, any> | StatelessComponent<TOriginalProps>
    ): ComponentConstructor<TOwnProps, any>;
  }
  type FuncOrSelf<T> = T | (() => T);

  /**
   * Connects a React component to a Redux store.
   * @param mapStateToProps
   * @param mapDispatchToProps
   * @param mergeProps
   * @param options
   */
  export function connect<TStateProps, TDispatchProps, TOwnProps>(
    mapStateToProps: FuncOrSelf<MapStateToProps<TStateProps, TOwnProps>>,
    mapDispatchToProps?: FuncOrSelf<MapDispatchToPropsFunction<TDispatchProps, TOwnProps> | MapDispatchToPropsObject>
  ): ComponentDecorator<TStateProps & TDispatchProps, TOwnProps>;

  interface MapStateToProps<TStateProps, TOwnProps> {
    (state: any, ownProps?: TOwnProps): TStateProps;
  }

  interface MapDispatchToPropsFunction<TDispatchProps, TOwnProps> {
    (dispatch: Dispatch<any>, ownProps?: TOwnProps): TDispatchProps;
  }


  interface MapDispatchToPropsObject {
    [name: string]: ActionCreator<any>;
  }

  interface MergeProps {
    (stateProps: any, dispatchProps: any, ownProps: any): any;
  }

  interface Options {
    /**
     * If true, implements shouldComponentUpdate and shallowly compares the result of mergeProps,
     * preventing unnecessary updates, assuming that the component is a “pure” component
     * and does not rely on any input or state other than its props and the selected Redux store’s state.
     * Defaults to true.
     * @default true
     */
    pure: boolean;
  }

  export interface Property {
    /**
     * The single Redux store in your application.
     */
    store?: Store<any>;
    children?: Function;
  }

  /**
   * Makes the Redux store available to the connect() calls in the component hierarchy below.
   */
  export abstract class Provider extends Component<Property, {}> { }

  export default {
    Provider, connect
  }
}