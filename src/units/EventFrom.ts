interface EventFrom<T extends EventTarget> extends Event {
	currentTarget: T
}

export default EventFrom
